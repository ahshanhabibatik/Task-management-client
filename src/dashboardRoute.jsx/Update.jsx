import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Router/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";


const Update = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const { title, date, notes, priority, _id } = useLoaderData();

  const onSubmit = async (data) => {
    const taskItem = {
      date: data.date,
      name: data.name, // Make sure you have a 'name' field in your form
      notes: data.notes,
      priority: data.priority,
      title: data.title,
      time: new Date(),
      email: user.email
    };

    fetch(`https://task-server-rust.vercel.app/usertasks/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(taskItem)
    })
      .then(res => res.json())
      .then(data => {
        if (data.matchedCount) {
          reset();
          Swal.fire({
            title: 'success!!',
            text: 'Item Details Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        }
      });
  };

  return (
    <div className="mb-20">
      <h1 className="text-center my-12 uppercase font-bold text-3xl lg:5xl">Update the task</h1>
      <div data-aos="zoom-in-up" data-aos-duration="2500" className='mt-12 bg-lime-200 shadow-lg rounded-lg p-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* User Name */}
          <div className="flex w-full gap-4 my-6">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                placeholder="User Name"
                {...register("name", { required: true })}
                className="input input-bordered input-warning w-full"
              />
            </div>
          </div>

          {/* Title and Deadline */}
          <div className="flex w-full gap-4 my-6">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                value={title}
                placeholder="Title of the Task"
                {...register("title", { required: true })}
                className="input input-bordered input-warning w-full"
              />
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                value={date}
                {...register("date", { required: true })}
                className="input input-bordered input-warning w-full"
              />
            </div>
          </div>

          {/* Priority */}
          <div className="flex w-full gap-4 my-6">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <select
                value={priority}
                {...register("priority", { required: true })}
                className="select select-bordered select-warning w-full"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="w-full lg:w-1/2">
            <label className="label">
              <span className="label-text">Additional Notes</span>
            </label>
            <textarea
              value={notes}
              {...register("notes", { required: true })}
              className="textarea textarea-bordered textarea-warning w-full"
              rows="4"
            ></textarea>
          </div>

          <button className="btn bg-gray-200 btn-outline border-orange-500 border-0 border-b-4 mt-4">Book Now</button>
        </form>
      </div>
    </div>
  );
};


export default Update;