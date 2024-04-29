<div class="head1">
    <img class="head1-img1" src="https://avatars.githubusercontent.com/u/125558396?s=48&v=4">
    <h2>portfolio_v2.0 </h2>
    <h4 class="head1-public">Public</h4>
</div>

<div class="head2">
    <select name="" id="head2-main">
        <option value="main">main</option>
    </select>
    <p>1 Branch</p>
    <p>0 Tags</p>
    <input type="text" placeholder="Go to file">
</div>
<div class="h3-border">
    <div class="head3">
        <img class="head3-img" src="https://avatars.githubusercontent.com/u/125558396?v=4&size=40">
        <h4>xyz-harshal</h4>
        <a href="#">did</a>
    </div>
    <div class="head3-all">
        <div class="head3-public">
            <a>public</a>
            <a id="head3-huge">huge update</a>
            <a id="head3-huge">2 months ago</a>
        </div>
        <div class="head3-src">
            <a>src</a>
            <a id="head3-huge">did</a>
            <a id="head3-huge">last month</a>
        </div>
    </div>
    <div class="head3-gitignore">
        <a>.gitignore</a>
        <a id="head3-huge">Initialize project using Create React App</a>
        <a id="head3-huge">8 months ago</a>
    </div>
</div>
<div class="page1">
    <p class="srno">12</p>
    <p></p>
    <p>-</p>
    <p class="text">VJTI Socials,An Anonymous forum</p>
</div>
<div class="page2">
    <p></p>
    <p class="srno">12</p>
    <p>+</p>
    <p>ANTI VJTI</p>
</div>
<div class="page3">
    <p class="srno">13</p>
    <p>13</p>
    <p>  </p>
    <p>className="buttons"</p>
</div>

<style>
    *{
    box-sizing: border-box;
}


body{
    background-color: #282a36;
    color: white;
}
.head1{
    padding-bottom: 5px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    border-bottom: 2px solid grey;
}

.head1-public{
    border: 2px solid grey;
    border-radius: 20px;
    padding: 4px 8px;
    font-size: 13px;
}

.head1-img1{
    border-radius: 50%;
    height: 45px;
    width: 45px;
}
.head2{
    padding: 10px 30px;
    display: flex;
    gap: 30px;
    width: 100vw;
    height: 50px;
    position: relative;
    align-items: center;
}
.head2>input{
    position: absolute;
    right: 30%;
    height: 30px;
    width: 250px;
    border: gray 2px solid;
    border-radius: 4px;
    background-color: transparent;
    padding-left: 10px;
}

.head2>select{
    border: 2px solid grey; 
    border-radius: 20px;
    padding: 20px 40px;
    background-color: gray;
    font-size: 15px;
    color: #c9d1d9;
}

.h3-border{
    height: 9.8vw;
    width: 80vw;
    border: 1px solid gray;
    padding: 0px 0px;
    border-radius: 10px;
}

.head3{
    padding: 10px 30px;
    display: flex;
    gap: 12px;
    width: 100%;
    height: 50px;
    position: relative;
    align-items: center;
    background-color: #848d97;
}

.head3-img{
    border-radius: 50%;
    height: 45px;
    width: 45px;
}

.head3>a{
    color: gray;
    text-decoration: none;
}

.head3-public{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid gray;
}

#head3-huge{
    color: #848d97;
}

.head3-all{
    display: flex;
    flex-direction: column;

}

.head3-src{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid gray;
}

.head3-gitignore{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}
.page1{
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 0.5fr 5fr;
        box-sizing: border-box;
        border: 1px solid gray;
        border-radius: 3px;
        background-color: #bb800966;
    }
    .page2{
        display: grid;
        width: 99vw;
        grid-template-columns: 0.5fr 0.5fr 0.5fr 5fr;
        box-sizing: border-box;
        border: 1px solid gray;
        border-radius: 3px;
        background-color: #3fb9504d;
    }
    .page3{
        display: grid;
        width: 99vw;
        grid-template-columns: 0.5fr 0.5fr 0.5fr 5fr;
        box-sizing: border-box;
        border: 1px solid gray;
        border-radius: 3px;
    }
    .srno{
        width: 5px;
    }
</style>