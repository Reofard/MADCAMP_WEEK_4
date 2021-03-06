import {useEffect, useRef} from 'react'
import './Calibration.css'
import { useNavigate } from 'react-router-dom';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Button from '@mui/material/Button';

export default function Calibration() {
  const navigate = useNavigate();
  const webgazer = window.webgazer
  let elements = [];
  let calicnt =useRef(0);

  useEffect(()=>{
    webgazer.clearData()
    webgazer.setGazeListener((data, clock)=>{
    }).begin()
    console.log(elements);
  }, [])


  function goToMatching(e){
    webgazer.pause();
    navigate(`/manmatching`);
  }

  function startCalibration(e){
    let temp = document.querySelectorAll('.cell')
    for(var i=0, n; n = temp[i]; ++i) elements.push(n)
    elements.sort(() => Math.random() - 0.5);
    elements[0].style.visibility = "visible";
    document.querySelector('.startcali').style.visibility = 'hidden';
  }

  function Calibration(e){
    calicnt.current += 1;
    let cell = elements.shift();
    cell.style.visibility = "hidden";
    elements[0].style.visibility = "visible";
    elements.push(cell)
    if(calicnt.current > 8){
      document.querySelector('.goToMatching').style.visibility = 'visible'
    }
  }
  
  return (
    <div className='Lobby'> 
      <div className='calrow'>
        <div className='calcolumn'>
          <div className='cell2'>
            {/* <CheckBoxOutlineBlankIcon onClick={Calibration} className='bnt1'>
            </CheckBoxOutlineBlankIcon> */}
          </div>
          <div className='cell'>
            <CheckBoxOutlineBlankIcon style={{ fontFamily: "pretty"}} onClick={Calibration} className='bnt2'>
            </CheckBoxOutlineBlankIcon>
          </div>
          <div className='cell'>
            <CheckBoxOutlineBlankIcon style={{ fontFamily: "pretty"}} onClick={Calibration} className='bnt3'>
            </CheckBoxOutlineBlankIcon>
          </div>
        </div>
        <div className='calcolumn'>
          <div className='cell'>
            <CheckBoxOutlineBlankIcon style={{ fontFamily: "pretty"}} onClick={Calibration} className='bnt4'>
            </CheckBoxOutlineBlankIcon>
          </div>
          <div className='cell1'>
            <div className = 'startcali'>
              <span className='startText'> ??? ????????? ???????????? ?????????<br/>????????? ????????? ????????? ???????????????.<br/><br/>???????????? ???????????? ????????? <br/>?????? ?????? ????????? ??????????????? <br/>????????? ???????????????.</span>
              <div className = 'start'>
                <Button style={{ fontFamily: "pretty", marginTop: "1rem"}} onClick = {startCalibration} color="secondary" variant='outlined' type='button' > Start Calibration </Button>
              </div>
            </div>
            <div className='goToMatching'>
              <Button style={{ fontFamily: "pretty"}} onClick={goToMatching} color="secondary" variant='outlined' type='button' > Start Matching </Button>
            </div>
          </div>
          <div className='cell'>
            <CheckBoxOutlineBlankIcon style={{ fontFamily: "pretty"}} onClick={Calibration} className='bnt5'>
            </CheckBoxOutlineBlankIcon>
          </div>
        </div>
        <div className='calcolumn'>
          <div className='cell'>
            <CheckBoxOutlineBlankIcon style={{ fontFamily: "pretty"}} onClick={Calibration} className='bnt6'>
            </CheckBoxOutlineBlankIcon>
          </div>
          <div className='cell'>
            <CheckBoxOutlineBlankIcon style={{ fontFamily: "pretty"}} onClick={Calibration} className='bnt7'>
            </CheckBoxOutlineBlankIcon>
          </div>
          <div className='cell'>
            <CheckBoxOutlineBlankIcon style={{ fontFamily: "pretty"}} onClick={Calibration} className='bnt8'>
            </CheckBoxOutlineBlankIcon>
          </div>
        </div>

      </div>
    </div>
  );
}