import React, { useRef } from 'react'

const Filters = () => {

    function displayItems(a){
        let searchItems = document.getElementsByClassName(a);
        let allItems = document.getElementsByClassName('content-item');
        document.getElementsByClassName('sim-slider')[0].style.display='none';
        for (let i = 0; i < allItems.length; i++){
            allItems[i].style.display='none';
        }
        for (let i = 0; i < searchItems.length; i++){
            searchItems[i].style.display='block';
        }
    }

    return (
        <div className="firm">
            <div className="firm-btn"><button onClick={() => {displayItems('content-item')}}>Все</button></div>
            <div className="firm-btn"><button onClick={() => {displayItems('masking_1')}}>Maskking</button></div>
            <div className="firm-btn"><button onClick={() => {displayItems('masking_2')}}>Maskking pro max</button></div>
            <div className="firm-btn"><button onClick={() => {displayItems('masking_3')}}>Maskking 2.0</button></div>
            <div className="firm-btn"><button onClick={() => {displayItems('hqd_1')}}>Hqd Cuvie plus</button></div>
            <div className="firm-btn"><button onClick={() => {displayItems('hqd_2')}}>HQD MAXX</button></div>
            <div className="firm-btn"><button onClick={() => {displayItems('hqd_3')}}>HQD KING</button></div>
            <div className="firm-btn"><button onClick={() => {displayItems('hqd_4')}}>HQD CUVIE AIR</button></div>
            <div className="firm-btn"><button onClick={() => {displayItems('elf_1')}}>ELF BAR 1500</button></div>
        </div>
    )
}
export default Filters;