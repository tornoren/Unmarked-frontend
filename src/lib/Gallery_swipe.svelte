<script>

    import { Swipe, SwipeItem } from "svelte-swipe";
    import {urlFor} from '$lib/sanity';
    export let images=[];

    const swipeConfig = {
      autoplay: false,
      delay: 2000,
      showIndicators: true,
      transitionDuration: 250,
      defaultIndex: 0,
    };
  </script>
  
  <style>

      :root{
    --sv-swipe-panel-height: inherit;
    --sv-swipe-panel-width: inherit;
    --sv-swipe-panel-wrapper-index: 2;
    --sv-swipe-indicator-active-color: grey;
    --sv-swipe-handler-top: 0px;
    }
   
    .swipe-holder :global(.swipe-item-wrapper) {
      border-radius: 5px;
    }
  
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
            <SwipeItem>  <img src={urlFor(image).width(600).height(400).url()} alt={image.asset.description||"No alttext available"}>
            </SwipeItem>
        {/each}
        </Swipe>
  </div>
  