<h1>Task Creation</h1>

<div id="creationform">
    <input type="text" placeholder="Task Title">
    <input type="text" placeholder="Description">
    <select name="grouplist" id="glist">
        <option value="group">group</option>
    </select>
    <div id="date">
        <p>Start Date</p>
        <select name="startdate-day" id="date-day">
            <option value="00">00</option>
        </select>
        <select name="startdate-month" id="date-month">
            <option value="00">January</option>
        </select>
        <select name="startdate-year" id="date-year">
            <option value="00">0000</option>
        </select>
    </div>
    <div id="date">
        <p>End Date</p>
        <select name="enddate-day" id="date-day">
            <option value="00">00</option>
        </select>
        <select name="enddate-month" id="date-month">
            <option value="00">January</option>
        </select>
        <select name="enddate-year" id="date-year">
            <option value="00">0000</option>
        </select>
    </div>
    <p id=errormsg>Error</p>
    <button>Create</button>
</div>

<style>
    h1{
        text-align: center;
        margin-top: 50px;
    }
    #creationform {
        display: block;
        width: 270px;
        margin: auto;
    }
    #creationform input {
        width: 100%;
        height: 40px;
        font-size: 18px;
        text-indent: 5px;
    }
    #creationform input:first-of-type {
        margin: 20px 0;
    }
    #glist {
        min-width: 100px;
        width: 111px;
        height: 46px;
        float:right;
        margin: 15px 0px;
        transform: translateX(5%);
    }
    #date {
        width: 102.5%;
        height: 63px;
        display: inline-block;
        margin-bottom: 20px;
    }
    #date:last-of-type{
        margin-bottom: 10px;
    }
    #date #date-day {
        width: 20%;
        font-size: 18px;
        height: 45px;
        float:left;
        border-radius: 5px 0px 0px 5px;
        text-align: center;
    }
    #date #date-month {
        float:left;
        width: 50%;
        font-size: 18px;
        height: 45px;
        border-radius: 0px;
        text-align: center;
    }
    #date #date-year {
        float:left;
        width: 30%;
        font-size: 18px;
        height: 45px;
        border-radius: 0px 5px 5px 0px;
        text-align: center;
    }
    select:hover{
        background-color: #383838;
    }
    #errormsg {
        height: 80px;
        margin-bottom: 10px;
    }
    button{
        float: right;
        transform: translateX(5%);
        width: 111px;
        height: 46px;
    }

</style>