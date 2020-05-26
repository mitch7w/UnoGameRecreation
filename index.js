const express = require("express") ;
const app = express() ;

app.listen(3000, function(req,res) {
  console.log("App Listening on port 3000");
}) ;

  // Each card has:
  // colour: green, blue, green, yellow, none
  // special: 0 skip , 1 reverse , 2 +2 , 3 colour change , 4 +4 , 5 normal number
  // number: 0-9 and if 10 it is special

// Initialize card array at start
let pickupPile = [
  // red cards
   {colour: "red", special: 5, number: 0}, // numbers 1-9
   {colour: "red", special: 5, number: 1},
   {colour: "red", special: 5, number: 1},
   {colour: "red", special: 5, number: 2},
   {colour: "red", special: 5, number: 2},
   {colour: "red", special: 5, number: 3},
   {colour: "red", special: 5, number: 3},
   {colour: "red", special: 5, number: 4},
   {colour: "red", special: 5, number: 4},
   {colour: "red", special: 5, number: 5},
   {colour: "red", special: 5, number: 5},
   {colour: "red", special: 5, number: 6},
   {colour: "red", special: 5, number: 6},
   {colour: "red", special: 5, number: 7},
   {colour: "red", special: 5, number: 7},
   {colour: "red", special: 5, number: 8},
   {colour: "red", special: 5, number: 8},
   {colour: "red", special: 5, number: 9},
   {colour: "red", special: 5, number: 9},
   {colour: "red", special: 0, number: 10}, // skip cards
   {colour: "red", special: 0, number: 10},
   {colour: "red", special: 1, number: 10}, // reverse cards
   {colour: "red", special: 1, number: 10},
   {colour: "red", special: 2, number: 10}, // +2 cards
   {colour: "red", special: 2, number: 10},
   // blue cards
    {colour: "blue", special: 5, number: 0}, // numbers 1-9
    {colour: "blue", special: 5, number: 1},
    {colour: "blue", special: 5, number: 1},
    {colour: "blue", special: 5, number: 2},
    {colour: "blue", special: 5, number: 2},
    {colour: "blue", special: 5, number: 3},
    {colour: "blue", special: 5, number: 3},
    {colour: "blue", special: 5, number: 4},
    {colour: "blue", special: 5, number: 4},
    {colour: "blue", special: 5, number: 5},
    {colour: "blue", special: 5, number: 5},
    {colour: "blue", special: 5, number: 6},
    {colour: "blue", special: 5, number: 6},
    {colour: "blue", special: 5, number: 7},
    {colour: "blue", special: 5, number: 7},
    {colour: "blue", special: 5, number: 8},
    {colour: "blue", special: 5, number: 8},
    {colour: "blue", special: 5, number: 9},
    {colour: "blue", special: 5, number: 9},
    {colour: "blue", special: 0, number: 10}, // skip cards
    {colour: "blue", special: 0, number: 10},
    {colour: "blue", special: 1, number: 10}, // reverse cards
    {colour: "blue", special: 1, number: 10},
    {colour: "blue", special: 2, number: 10}, // +2 cards
    {colour: "blue", special: 2, number: 10},
    // green cards
     {colour: "green", special: 5, number: 0}, // numbers 1-9
     {colour: "green", special: 5, number: 1},
     {colour: "green", special: 5, number: 1},
     {colour: "green", special: 5, number: 2},
     {colour: "green", special: 5, number: 2},
     {colour: "green", special: 5, number: 3},
     {colour: "green", special: 5, number: 3},
     {colour: "green", special: 5, number: 4},
     {colour: "green", special: 5, number: 4},
     {colour: "green", special: 5, number: 5},
     {colour: "green", special: 5, number: 5},
     {colour: "green", special: 5, number: 6},
     {colour: "green", special: 5, number: 6},
     {colour: "green", special: 5, number: 7},
     {colour: "green", special: 5, number: 7},
     {colour: "green", special: 5, number: 8},
     {colour: "green", special: 5, number: 8},
     {colour: "green", special: 5, number: 9},
     {colour: "green", special: 5, number: 9},
     {colour: "green", special: 0, number: 10}, // skip cards
     {colour: "green", special: 0, number: 10},
     {colour: "green", special: 1, number: 10}, // reverse cards
     {colour: "green", special: 1, number: 10},
     {colour: "green", special: 2, number: 10}, // +2 cards
     {colour: "green", special: 2, number: 10},
     // yellow cards
      {colour: "yellow", special: 5, number: 0}, // numbers 1-9
      {colour: "yellow", special: 5, number: 1},
      {colour: "yellow", special: 5, number: 1},
      {colour: "yellow", special: 5, number: 2},
      {colour: "yellow", special: 5, number: 2},
      {colour: "yellow", special: 5, number: 3},
      {colour: "yellow", special: 5, number: 3},
      {colour: "yellow", special: 5, number: 4},
      {colour: "yellow", special: 5, number: 4},
      {colour: "yellow", special: 5, number: 5},
      {colour: "yellow", special: 5, number: 5},
      {colour: "yellow", special: 5, number: 6},
      {colour: "yellow", special: 5, number: 6},
      {colour: "yellow", special: 5, number: 7},
      {colour: "yellow", special: 5, number: 7},
      {colour: "yellow", special: 5, number: 8},
      {colour: "yellow", special: 5, number: 8},
      {colour: "yellow", special: 5, number: 9},
      {colour: "yellow", special: 5, number: 9},
      {colour: "yellow", special: 0, number: 10}, // skip cards
      {colour: "yellow", special: 0, number: 10},
      {colour: "yellow", special: 1, number: 10}, // reverse cards
      {colour: "yellow", special: 1, number: 10},
      {colour: "yellow", special: 2, number: 10}, // +2 cards
      {colour: "yellow", special: 2, number: 10}
] ;
// TODO Randomize array
playedPile = [] ;
let players = [ // Initialize players array
  {name: "Mitch" , cards: [] }
] ;
