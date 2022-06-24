<template lang="">
  <div>
  <div class="row">
    <div class='col-md-2'></div>
    <div class='col-md-8 cal'>
      <FullCalendar :options="calendarOptions" />
    </div>
    <div class='col-md-2'></div>
  </div>
     
  </div>
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ,listPlugin,timeGridPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        headerToolbar:{
          left:'dayGridMonth,timeGridWeek,listWeek',
          center:'title',
          right:'prev today next'
        }
      }
    }
  },
  methods: {
    handleDateClick(){
      alert('clicked')
    }
  },
}
</script>
<style lang=""></style>
