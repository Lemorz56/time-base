<script lang="ts">
  import "../app.css";
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let data = [
    { time: '1:00', speed: 200, rpm: 12000 },
    { time: '1:01', speed: 205, rpm: 12500 },
    { time: '1:02', speed: 210, rpm: 13000 },
    // ... more telemetry data
  ];

  let speedChart;
  let rpmChart;

  onMount(() => {
    const speedCanvas = <HTMLCanvasElement> document.getElementById('speed-chart');
    const speedCtx = speedCanvas.getContext('2d')!; //todo remove !null

    const rpmCanvas = <HTMLCanvasElement> document.getElementById('rpm-chart');
    const rpmCtx = rpmCanvas.getContext('2d')!; //todo remove !null

    speedChart = new Chart(speedCtx, {
      type: 'line',
      data: {
        labels: data.map(d => d.time),
        datasets: [{
          label: 'Speed (km/h)',
          data: data.map(d => d.speed),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });

    rpmChart = new Chart(rpmCtx, {
      type: 'line',
      data: {
        labels: data.map(d => d.time),
        datasets: [{
          label: 'RPM',
          data: data.map(d => d.rpm),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  });
</script>

<h1 class="text-3xl font-bold underline">Telemetry Data</h1>
<canvas id="speed-chart"></canvas>
<canvas id="rpm-chart"></canvas>

<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
