import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';

const Move = () => {
    return (
        <Popup
            className="w-full h-full m-auto"
            trigger={<button className="m-auto relative top-[200px] left-[200px]"> Trigger</button>}
        >
            <>
                <div className="w-[377px] h-[26px] flex flex-row mx-auto mb-[22px] mt-7 justify-between">
                    <p className="text-sm my-auto">Add Station</p>
                    <div className="w-[164px] h-[26px] flex flex-row justify-between text-sm">
                        <button className=" w-[85px] h-[26px]  bg-[#04474433] text-[#004744] flex flex-row items-center justify-center">
                            Cancel
                        </button>
                        <button className="w-[72px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center">
                            Save
                        </button>
                    </div>
                </div>
                <div className="w-[377px] h-[50px] bg-[#F1F1F1] rounded-[4px] flex flex-col justify-center m-auto pl-4">
                    <p className="text-xs font-bold w-[76px] h-[16px]">Organization</p>
                    <input
                        type="text"
                        placeholder="Organization Name"
                        className="bg-[#F1F1F1] w-[345px] h-[14px] text-xs"
                    />
                </div>
            </>
        </Popup>
    );
};
export default Move;
let res = await fetchData.get(
    `products/search?q=${search}&limit=${limit}&skip=${uid}&select=${title},${sku},${weight},${price}`,
);

// const List = styled('ul')({
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     display: 'flex',
// });

// const Pagination = (props) => {
//     const { items } = usePagination({
//         count: props.total,
//         page: 1,

//     });
//     // console.log("check:", items);
//     // console.log("callback:", props);

//     const onPage = props.onPage;
//     // console.log(onPage);

//     const [page, setPage] = React.useState(0)
//     const hanleClick = () => {
//         console.log("click ok");

//         // onPage(20)
//         // for (let i = 0; i <= items.length; i++) {
//         //     if (items[i].selected == true) {
//         //         setPage(items[i].page)
//         //     }
//         //     onPage(page)
//         // }
//     }

//     return (
//         <div className='flex flex-row justify-between items-center w-full h-[38px] m-auto mb-5'>
//             <p className='w-[198px]h - [13px] text - [13px] cursor-pointer' >Showing 1 to 10 of 32,316  entries</p>

//             <nav onClick={hanleClick}>
//                 <List>
//                     {items.map(({ page, type, selected, ...item }, index) => {
//                         let children = null;

//                         if (type === 'start-ellipsis' || type === 'end-ellipsis') {
//                             children = '…';
//                         } else if (type === 'page') {
//                             children = (
//                                 <button
//                                     type="button"
//                                     style={{
//                                         fontWeight: selected ? 'bold' : undefined,
//                                     }}
//                                     {...item}
//                                 >
//                                     {page}
//                                 </button>
//                             );
//                         } else {
//                             children = (
//                                 <button type="button" {...item}>
//                                     {type}
//                                 </button>
//                             );
//                         }

//                         return <li key={index}>{children}</li>;
//                     })}
//                 </List>
//             </nav>
//         </div >

//     );
// }

// export default Pagination

// import { useState } from "react";
// import "../App.css"
// const Pagination = (props) => {
// // console.log("callback:", props);
// const [page, setPage] = useState()

// const onPage = props.onPage;
// // console.log(onPage);

// const hanleClick = () => {
//     onPage(20)

// }

//     return (
//         <>
//             <div className='flex flex-row justify-between items-center w-full h-[38px] m-auto mb-5'>
//                 <p className='w-[198px] h-[13px] text-[13px]'>Showing 1 to 10 of 32,316  entries</p>
//                 <nav className='flex flex-row'>
//                     <div className='w-[132px] h-[38px] border border-[#D9D9D9] mr-[6px] flex flex-row justify-around items-center'>
//                         <p className='text-xs w-16 h-3 flex flex-row items-center'>10 per page</p>
//                         <img src="public/session4/chevron_down.png" alt="" className='w-6 h-6' />
//                     </div>
//                     <ul className=' cursor-pointer  w-[341px] h-[38px] border border-[#D9D9D9] flex flex-row  items-center'>
//                         <li className='w-[89px] flex flex-row justify-center items-center'>
//                             <a href="#" >Previous</a>
//                         </li>
//                         <li className='w-[197px] h-[38px] flex flex-row  items-center gap-x-[2px]'>

//                             <a href="#" className='w-[29px] cursor-pointer h-full bg-[#004744] text-white flex flex-row items-center justify-center' >1</a>
//                             <a onClick={hanleClick} href="#" className='w-8 h-full border border-[#D9D9D9] border-x-0 flex flex-row justify-center items-center'>2</a>
//                             <a href="#" className='w-8 h-full border border-[#D9D9D9] border-r-0 flex flex-row justify-center items-center'>3</a>
//                             <a href="#" className='w-[30px] h-full border border-[#D9D9D9] border-r-0 flex flex-row justify-center items-center'>4</a>
//                             <a href="#" className='w-8 h-full border border-[#D9D9D9] border-r-0 flex flex-row justify-center items-center'>5</a>
//                             <a href="#" className='w-8 h-full border border-[#D9D9D9] flex flex-row justify-center items-center'>6</a>
//                         </li>
//                         <li className='w-[55px] h-full flex flex-row justify-center items-center'>
//                             <a href="#" >Next</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div >
//         </>
//     )

// }

// export default Pagination

// return (
//   <>
//     <table className='w-full h-[265px] m-auto  border-gray-300 border-[2px] mb-[368px] text-xs'>

//       <thead className=''>
//         <tr className="h-[40px] bg-[#EFEFEF] border-b-[3px] border-gray-300 flex flex-row font-bold">
//           <th className='w-[29px] h-full flex flex-row justify-center items-center'>ID</th>
//           <th onClick={displayTitle} className='cursor-pointer w-[182px] h-full flex flex-row pl-2 items-center'>Title</th>
//           <th onClick={displaySku} className='cursor-pointer w-[304px] h-full flex flex-row pl-2 items-center '>Sku</th>
//           <th onClick={displayWeight} className='cursor-pointer w-[304px] h-full flex flex-row pl-2 items-center'>Weight</th>
//           <th onClick={displayPrice} className='cursor-pointer w-[306px] h-full flex flex-row pl-2 items-center'>Price</th>
//           <th className='w-[123px] h-full flex flex-row justify-center items-center'>Enabled</th>
//           <th className='w-[151px] h-full flex flex-row justify-center items-center'>Action</th>
//         </tr>

//       </thead>
//       <tbody className='h-[225px] '>
//         {listUsers && listUsers.map((data) => (

//           <tr key={data.id} className='h-[45px] flex flex-row text-sm text-xs' >
//             <td className='w-[29px] h-full flex flex-row justify-center items-center'>{data.id}</td>
//             <td className='w-[182px] h-full flex flex-row pl-2 items-center'>{data.title}</td>
//             <td className='w-[304px] h-full flex flex-row pl-2 items-center '>{data.sku}</td>
//             <td className='w-[304px] h-full flex flex-row pl-2 items-center'>{data.weight}</td>
//             <td className='w-[306px] h-full flex flex-row pl-2 items-center'>{data.price}</td>
//             <td className='w-[126px] h-full flex '>
//               <img onClick={HanleSwitch} src={`${boolean ? "/public/Station/Switch2.png" : "/public/Station/Switch.png"}`} alt="" className='w-[25px] h-[14px] m-auto' />
//             </td>
//             <td className='cursor-pointer w-[140px] h-full flex flex-row justify-center items-center text-[13px]'>
//               <span className='text-[#004744] mr-2'>VIEW</span>
//               <span className='text-[#004744] mr-4'>EDIT</span>
//               <span onClick={displayDelete} className='text-[#7C7B7B]'>DELETE</span>
//             </td>
//           </tr>
//         ))
//         }

//       </tbody>
//     </table >
//   </>
// )
// // }

// renderItem={(item) => (
//     <PaginationItem
//         slots={{ previous: (props) => <div {...props} className='w-[89px] flex flex-row justify-center items-center'>Previous</div>, next: (props) => <div {...props} className='w-[55px] h-full flex flex-row justify-center items-center' > Next</div>, }}
//         {...item}
//     />
// )}
// let res = await fetchData.get(`products?limit=5&skip=${uid}&select=${title},${sku},${weight},${price}`);
// if (statusSearch && search.length > 0) {
//     res = await fetchData.get(`products/search?q=${search}`);
// } else {
//     setStatusSearch(false)
// }

// if (res && res.data) {
//     setListUsers(res.data.products)
// }
// if (statusPerpage) {
//     console.log(" hien tai", count);

// } else {
//     res.data.total % 5 == 0 ? setCount(Math.floor(res.data.total / 5)) : setCount(Math.floor(res.data.total / 5) + 1)
//     setStatusPerpage(false)
// }

// }
let tuoi = 24;
let infor = 'pham thanh long' + tuoi + 'tuoi';

let inf = `pham thanh long ${tuoi} tuoi`;

let func = (para1 = 7, para2) => {
    console.log('tong cac so truyen vao trong : ', para1 + para2);
};

//   let func = (para1 = 7, para2 = 43) => {
//     console.log("tong cac so truyen vao trong : ", para1 + para2)
//   }

//   func()
//   let myfun = (bien1, bien2, ...bienn) => {
//     console.log("bien 1:", bien1);
//     console.log("bien 2:", bien2);
//     console.log("bienn:", bienn);
//   }
//   myfun("Nhi", "Lanh", "long", "Nhi2", "Danh", "okokok")

//   function Function1() {
//     console.log("function es5");
//   }
//   let Function2 = () => {
//     console.log("function es6");
//   }

//   let myarr = ["Nhi", "NHị", "Long", "Lành"]
//   let [a, b, , d] = myarr
//   console.log(`du lieu la ${a} va ${b} vs ${d}`);

//   let { w, ...other } = { q: 1, w: 2, e: 3, r: 4 }
//   console.log(other);
//   let [x, ...other2] = ["x = 3", "y = 7", "z = 19", "t = 22"]
//   console.log(other2);
