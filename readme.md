A simple polar clock for React.

Based on https://codepen.io/pankajparashar/pen/sIpyw

Set colors:
```javascript
<Polar colors={{
  seconds: '#FF0',
  minutes: '#00F',
  hours: '#F0F',
  month: '#0F0',
  date: '#F00' }} 
/>
```

Set size:
```javascript
<Polar size={200} />
```

Set update interval (default 25ms):
```javascript
<Polar interval={25} />
```