import './App.css';
import {useState, useEffect} from 'react';
import bg from './img/mainBg.jpg';
import data from './data.js';
import { Route, Routes, Link, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';
import Detail1 from './routes/Detail1';
/* import About from './routes/About.js'; */
import axios from 'axios';

function App() {
	let [datas] =useState(data)
	const [posts, setPosts]=useState([]);

	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
			console.log(response.data)
			setPosts(response.data)
		}) 
/* 	axios({
		method:'GET',
		url:'https://jsonplaceholder.typicode.com/users'
	}).then(response => {
		console.log(response.data)
		setPosts(response.data)
}) */

	}, []); 

  return (
    <div className="App">
		{/* <img src="img/animal-7220153_640.jpg" alt="" /> */}

		<Routes>
			<Route path="/" element={
				<div>
					<nav className='nav'>
						<h1 className="logo"><Link to="/">Blog</Link></h1>
						<ul className="menu">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/detail1">상세페이지</Link></li>
							<li><Link to="/about">Best</Link></li>
						</ul>
					</nav>

					<div className="main-bg" style={{backgroundImage : 'url('+bg+')'}}></div>

					<div className="mt20">
						<h2 className="mb20">Best of Best</h2>
						<ul className='fb'>
							
							{/* <Card datas={datas[0]} i={1} />
							<Card datas={datas[1]} i={2} />
							<Card datas={datas[2]} i={3} /> */}
							{
								datas.map((item, i)=>{
									return (
										<Card datas={datas[i]} i={i+1} key={i} />
									)
								})
							}
							
						</ul>
					</div>
					<br />
					<ul className='user'>
						{posts.map(post => (
							<li key={post.id}>
								<div>{post.name}</div>
								<div>{post.email}</div>
								<div>{post.address.city}</div>
							</li>
						))}
					</ul>
				</div>} 
			/>

			

			<Route path="/detail1" element={<Detail1 />} />
			<Route path="/detail/:a" element={<Detail datas={datas} />} />
			<Route path="/about" element={<About />} >
				<Route path="menber" element={<div>멤버임</div>}></Route>
				<Route path="location" element={<About />}></Route>
			</Route>
		</Routes>
		
    </div>
  );
}

function About(){
	return(
		<div>
			<h4>회사정보임</h4>
			<Outlet></Outlet>
		</div>
	)
}

function Card(props){
	return(
		<li>
			<Link to={`/detail/${props.datas.id}`}>
				<img src={props.datas.imges} width="80%" alt={props.datas.title} />
				<h4 className="mt20">{props.datas.title}</h4>
				<p>{props.datas.content}</p>
				<p className='price'>{props.datas.price}</p>
			</Link>
		</li>
	)
}

export default App;
