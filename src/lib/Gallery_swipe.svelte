<script>

    import { Swipe, SwipeItem } from "svelte-swipe";
    export let images=[];

    const swipeConfig = {
      autoplay: false,
      delay: 2000,
      showIndicators: true,
      transitionDuration: 1000,
      defaultIndex: 0,
    };
  </script>
  
  <style>
    .swipe-holder{
      height: 30vh;
      width: 100%;
    }
    img{
      max-width: 100%;
      height: auto;
    }
  </style>
  
  <div class="swipe-holder">
    <Swipe {...swipeConfig}>
        {#each images as image}
            <SwipeItem>  <img src={image.asset.url+"?w=600"} alt={image.asset.description||"No alttext available"}>
            </SwipeItem>
        {/each}
        </Swipe>
  </div>
  