const info = [
  {
    image: "https://plus.unsplash.com/premium_photo-1664279047184-6d9ad12f1100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    employee: "Tran Chinh",
    Job: "Developer",
    Position: "Nhan Vien",
    Email: "Xinchao123@gmail.com"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1664279047184-6d9ad12f1100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    employee: "Tran Chinh",
    Job: "Developer",
    Position: "Nhan Vien",
    Email: "Xinchao123@gmail.com"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1664279047184-6d9ad12f1100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    employee: "Tran Chinh",
    Job: "Developer",
    Position: "Nhan Vien",
    Email: "Xinchao123@gmail.com"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1664279047184-6d9ad12f1100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    employee: "Tran Chinh",
    Job: "Developer",
    Position: "Nhan Vien",
    Email: "Xinchao123@gmail.com"
  }
];

function App() {
  return (
    <div className=" max-w-[1200px] m-auto">
      <table className="w-full" >
        <thead className="bg-gray-100 border-2 border-yellow-400" >
          <tr className="flex border-2 p-4">
            <th className="flex-[0.3] text-left" >Employee</th>
            <th className="flex-[0.3] text-left">Job</th>
            <th className="flex-[0.2] text-left">Position</th>
            <th className="flex-[0.2] text-left" >Email</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => {
            return (
              <tr>
                <td >
                  <div className="flex" >
                    <img src={item.image} className="w-[30px] h-[30px]" />
                    <p>{item.employee}</p>
                  </div>
                </td>
                <td  >{item.Job}</td>
                <td  >{item.Position}</td>
                <td  >{item.Email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
