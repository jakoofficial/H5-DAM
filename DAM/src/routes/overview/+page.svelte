<script>
    import Overviewitem from "$lib/components/overviewitem.svelte";

    //icons
    import itemFriends from '$lib/assets/friends.svg'
    import itemGroups from '$lib/assets/groups.svg'
    import itemCalendar from '$lib/assets/calendar.svg'
    import itemProfile from '$lib/assets/profile.svg'
</script>

<h1>Overview</h1>
<div id="overviewMenu">
    <Overviewitem icon={itemFriends} buttonText="Friends"></Overviewitem>
    <Overviewitem icon={itemGroups} buttonText="Groups"></Overviewitem>
    <Overviewitem icon={itemCalendar} buttonText="Calendar"></Overviewitem>
    <Overviewitem icon={itemProfile} buttonText="Profile"></Overviewitem>
</div>
<style>
    h1 {
        width:100%;
        text-align: center;
        margin: 20% 0 15% 0;
    }
    #overviewMenu{
        width: 85%;
        margin: auto;
    }
    :global(.overviewItem){
        margin-bottom: 25px;
    }
    :global(.overviewItem):nth-child(2n) {
        float: right;
    }
</style>