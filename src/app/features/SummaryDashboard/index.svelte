<script>
  import { Grid, Row, Column } from "carbon-components-svelte";
  import { BarChartSimple } from "@carbon/charts-svelte";
  import { Tile } from "carbon-components-svelte";
</script>

<Grid padding>
  <Row>
    <Column>
      <h2>Summary Dashboard</h2>
    </Column>
  </Row>
  <Row>
    <Column>
      <Tile>
        <BarChartSimple
          data={[
            { group: "Qty", value: 65000 },
            { group: "More", value: 29123 },
            { group: "Sold", value: 35213 },
            { group: "Restocking", value: 51213 },
            { group: "Misc", value: 16932 },
          ]}
          options={{
            title: "Simple bar (discrete)",
            height: "400px",
            axes: {
              left: { mapsTo: "value" },
              bottom: { mapsTo: "group", scaleType: "labels" },
            },
          }}
        />
      </Tile>
    </Column>
    <Column>
      <Tile>
        <BarChartSimple
          data={[
            { group: "Qty", value: 65000 },
            { group: "More", value: 29123 },
            { group: "Sold", value: 35213 },
            { group: "Restocking", value: 51213 },
            { group: "Misc", value: 16932 },
          ]}
          options={{
            title: "Simple bar (discrete)",
            height: "400px",
            axes: {
              left: { mapsTo: "value" },
              bottom: { mapsTo: "group", scaleType: "labels" },
            },
          }}
        />
      </Tile>
    </Column>
    <Column>
      <Tile>
        <BarChartSimple
          data={[
            { group: "Qty", value: 65000 },
            { group: "More", value: 29123 },
            { group: "Sold", value: 35213 },
            { group: "Restocking", value: 51213 },
            { group: "Misc", value: 16932 },
          ]}
          options={{
            title: "Simple bar (discrete)",
            height: "400px",
            axes: {
              left: { mapsTo: "value" },
              bottom: { mapsTo: "group", scaleType: "labels" },
            },
          }}
        />
      </Tile>
    </Column>
  </Row>
</Grid>

<style>
  /* your styles go here */
</style>
