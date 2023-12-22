import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Router/AuthProvider";


const CreateTask = () => {

  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {

    console.log(data)
    const taskItem = {
      date: data.date,
      name: data.name,
      notes: data.notes,
      priority: data.priority,
      title: data.title,
      time: new Date(),
      email: user.email
    }
    console.log(taskItem)

    fetch('https://task-server-rust.vercel.app/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(taskItem)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          reset()
          Swal.fire({
            title: "Congratulation",
            text: "You successfully assigned a task!",
            icon: "success"
          });
        }
      })

  };
  return (
    <div className="mb-20">
      <h1 className="text-center my-12 uppercase font-bold text-3xl lg:5xl">Create A task</h1>
      <div data-aos="zoom-in-up" data-aos-duration="2500" className='mt-12 bg-lime-200 shadow-lg rounded-lg p-5'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="flex w-full gap-4 my-6">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">
                  User Name
                </span>
              </label>
              <input type="text" defaultValue={user?.displayName} readOnly placeholder="User Name"{...register("name", { required: true })}
                className="input input-bordered input-warning w-full" />
            </div>
            <div className="form-control w-full flex-1">
              <label className="label">
                <span className="label-text">
                  Title
                </span>
              </label>
              <input type="text" placeholder="Title of the Task"{...register("title", { required: true })}
                className="input input-bordered input-warning w-full" />
            </div>
          </div>

          <div className="flex w-full gap-4 my-6">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">
                  Deadline
                </span>
              </label>
              <input type="date" {...register("date", { required: true })}
                className="input input-bordered input-warning w-full" />
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">
                  Priority
                </span>
              </label>
              <select {...register("priority", { required: true })} className="select select-bordered select-warning w-full">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <label className="label">
              <span className="label-text">
                Additional Notes
              </span>
            </label>
            <textarea {...register("notes")} className="textarea textarea-bordered textarea-warning w-full" rows="4"></textarea>
          </div>


          <button className="btn bg-gray-200 btn-outline border-orange-500 border-0 border-b-4 mt-4">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;