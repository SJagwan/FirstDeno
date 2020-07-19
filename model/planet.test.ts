// import { assertEquals , assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
// import {filterHabitablePlanets} from './planet.ts';

// const HABITAL_PLANET={
//   koi_disposition:"CONFIRMED",
//   koi_prad:"1",
//   koi_srad:"1",
//   koi_smass:"1",

// }
// const NOT_CONFIRMED={
//   koi_disposition:"FALSE POSITIVE",
// }
// const TOO_LARGE_PLANETRY_RADIUS={
//   koi_disposition:"CONFIRMED",
//   koi_prad:"1.5",
//   koi_srad:"1",
//   koi_smass:"1",

// }
// const TOO_LARGE_SOLAR_RADIUS={
//   koi_disposition:"CONFIRMED",
//   koi_prad:"1",
//   koi_srad:"1.01",
//   koi_smass:"1",

// }
// const TOO_LARGE_SOLAR_MASS={
//   koi_disposition:"CONFIRMED",
//   koi_prad:"1",
//   koi_srad:"1",
//   koi_smass:"1.04",

// }
// Deno.test("filter only habital planet",()=>{
//   const filtered=filterHabitablePlanets([
//     HABITAL_PLANET,
//     NOT_CONFIRMED,
//     TOO_LARGE_PLANETRY_RADIUS,
//     TOO_LARGE_SOLAR_RADIUS,
//     TOO_LARGE_SOLAR_MASS,
//   ])
//   assertEquals(
//     filtered
//   ,[
//     HABITAL_PLANET
//   ]);
// })