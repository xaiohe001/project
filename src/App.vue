<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
  }
</style>
