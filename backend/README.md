NodeJS React Graphs App

## Available Scripts

In the project directory, you can run:

### `node app.js`

Runs the app in the development mode.<br>

## React Graphs API
The following section details the project API's function signatures and typedefs.

#### getChartData

Gets the chart data

**Parameters**

- `none`

**Examples**

```
chartData = await axios.get('/chart')
```

Returns
```
{
  series: [
    {
      name: "Population infected",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
}
```

#### updateChartData

Updates the chart data based on params

**Parameters**

- `none`

**Examples**

```
chartData = await axios.put('/chart')
```

Returns
```
{
 message: 'Data updated',
 data: {
         series: [
           {
             name: "Population infected",
             data: [30, 40, 45, 50, 49, 60, 70, 91]
           }
         ]
       }
}
```

#### resetChartData

Resets the chart data to default values

**Parameters**

- `none`

**Examples**

```
chartData = await axios.put('/chart/reset')
```

Returns
```
{
 message: 'Data restarted',
 data: {
         series: [
           {
             name: "Population infected",
             data: [30, 40, 45, 50, 49, 60, 70, 91]
           }
         ]
       }
}
```

## React Graphs Websockets
The following section details the project websockets function signatures and typedefs.

#### updateChartData

Updates the chart data based on params

**Parameters**

- `none`

**Examples**

```
chartData = socket.on('ChartUpdate', data)
```

Returns
```
{
 action: 'update',
 data: {
         series: [
           {
             name: "Population infected",
             data: [30, 40, 45, 50, 49, 60, 70, 91]
           }
         ]
       }
}
```