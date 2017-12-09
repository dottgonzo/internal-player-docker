<template>
<div class="row border-bottom white-bg dashboard-header">
<div class="hidden-xs hidden-sm hidden-md">
  <div class="col-lg-4" style="text-align:right">
    <img style="height:150px" v-bind:src="avatar" />
  </div>
  <div class="col-lg-8">
    <h2 style="margin-top:60px;font-size:18px;"><strong>{{subtitle}}</strong></h2>
  </div>
</div>
<div class="hidden-lg">
  <div class="col-lg-4" style="text-align:center">
    <img style="height:150px" v-bind:src="avatar" />
  </div>
  <div class="col-lg-8">
    <h2 style="margin-top:20px;text-align:center"><strong style="font-size:16px">{{subtitle}}</strong></h2>
  </div>
  </div>

</div>
</template>
<script>
export default {
  props: ['subtitle', 'avatar', 'label']
}
</script>