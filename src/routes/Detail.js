import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
/* import styled from 'styled-components';

let YellowBtn=styled.button `
	background:yellow;
	color:black;
	padding: 10px;
`
let YellowBtn1=styled.button `
	background:${props => props.bg};
	color:${props => props.bg === 'blue' ? 'white': 'black'};
	padding: 10px;
`
let Box=styled.div `
	background:#ddd;
	padding: 20px;
`
let Par=styled.p `
	color:orange;
	font-size: 24px;
` */

const Detail = (props) => {
	let {a}= useParams();
	let [alert, setAlert] = useState(true)
	let [tab, setTab]=useState(0)

	useEffect(()=>{
		let timer=setTimeout(()=>{
			setAlert(false)
			console.log('랜더링');
			return () => {
				clearTimeout(timer)
			}
		},2000)
		//컴포넌트 로드 & 업데이트마다 실행됨
		/* console.log('랜더링') */
	},[]);

	/* let [count, setCount] = useState(0) */

	return (
		<div className='mt20'>
			{/* <Box>
				<YellowBtn>버튼</YellowBtn>
				<YellowBtn1 bg="blue">버튼</YellowBtn1>
				<YellowBtn1 bg="green">버튼</YellowBtn1>
				<Par>오늘은 한명이 안왔어요 ㅠㅠ</Par>
			</Box> */}
			
			{alert === true ? <div className='alert'>2초이내 구매시 할인</div>: null}
			<div className='detailCard'>
				<div className='imgWrap'>
					<img src={props.datas[a].imges} width="100%" alt="조명" />
				</div>
				<div className='info'>
					<h4 className="mt20">{props.datas[a].title}</h4>
					<p>{props.datas[a].content}</p>
					<p className='price'>{props.datas[a].price}</p>
					<button className='btn'>주문하기</button>
				</div>
			</div>
			<div className="tabs">
				<div className="item" onClick={()=>{setTab(0)}}><b>버튼0</b></div>
				<div className="item" onClick={()=>{setTab(1)}}><b>버튼1</b></div>
				<div className="item" onClick={()=>{setTab(2)}}><b>버튼2</b></div>
			</div>
{/* 			{
				tab===0? <div className='tabBox'>내용0</div> : null
			}
						{
				tab===1? <div className='tabBox'>내용1</div> : null
			}
						{
				tab===2? <div className='tabBox'>내용2</div> : null
			} */}
			<TabContent tab={tab}/>
		</div>
	);
};

/* function TabContent(props){
	if(props.tab===0){
		return <div className='tabBox'>내용0 </div>
	}else if(props.tab===1){
		return <div className='tabBox'>내용1 </div>
	}else if(props.tab===2){
		return <div className='tabBox'>내용2 </div>
	}
} */
function TabContent({tab}){
	let [fade, setFade]=useState('');

	useEffect(()=>{
		setTimeout(()=>{setFade('end')},200);
		return ()=>{
			setFade('')
		}
	},[tab]);
	return (
		<div className={'start' + fade}>
			{[<div className='tabBox'>내용0 </div>, <div className='tabBox'>내용1 </div>, <div className='tabBox'>내용2 </div>][tab]}
		</div>
	)
}

export default Detail;