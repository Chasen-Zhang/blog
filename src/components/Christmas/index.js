import clsx from 'clsx';
import React from 'react';
import style from './style.module.scss';
import mp3 from '@site/static/mp4/chrimas.mp3'
import {useMount} from 'react-use';
export default function Christmas() {
  useMount(() => {
    // document.getElementById('mp3').play()
  });
  const playMp3 = ()=>{
    document.getElementById('mp3').play()
  }
  const array = Array.from({ length: 129 }, (v, i) => i);
  return(
    <>
      <ul className={style.tree} onClick={playMp3}>
        <p className={clsx(style.jiangxiaoqian, style.wiggle)}>蒋晓茜 圣诞快乐！</p>
        <audio preload={true} id='mp3' style={{opcity:0.1}} controls="controls" loop autoPlay>
          <source src={mp3} type="audio/ogg"/>
        </audio>
        <div className={style.star}></div>
        <div className={style.chunk}></div>
        {
          array.map((item)=> {
            return <li StylE={`--i:${item}`} className={style.li} key={item}></li>
          })
        }
      </ul>
    </>
  )
}