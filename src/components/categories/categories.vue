<template>
  <section class="categories container mt-5 text-center">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 category-item">
        <div class="category">
          <font-awesome-icon icon="share" size="2x" style="color:#0d3f8f"></font-awesome-icon>
          <p>{{$t('categories.sendOrderTitle')}}</p>
          <p>{{$t('categories.sendOrderContent')}} </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 category-item">
        <div class="category">
          <font-awesome-icon icon="comments" size="2x" style="color:#0d3f8f"></font-awesome-icon>

          <p>{{$t('categories.willReceiveMessageTitle')}}</p>
          <p>{{$t('categories.willReceiveMessageContent')}} </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 category-item">
        <div class="category">
          <font-awesome-icon icon="hand-holding" size="2x" style="color:#0d3f8f"></font-awesome-icon>

          <p>{{$t('categories.goToReceiveDocumentTitle')}}</p>
          <p>{{$t('categories.goToRecieveDocumentTitle')}} </p>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- <script src="../categories/categories.js"></script> -->
