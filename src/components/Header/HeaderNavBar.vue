<template>
  <div id="header_nav_bar">
    <div class="logo">
      <img src="../../assets/img/avada-bakery-logo.png" alt="" />
    </div>
    <div class="list">
      <ul>
        <li v-for="(link, i) in links" :key="i">
          <a class="daisy_bush" :href="link.href">{{ link.text }}</a>
        </li>
        <li>
          <a class="daisy_bush" href="#"><i class="fas fa-shopping-cart"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNavBar",
  data() {
    return {
      links: [
        {
          text: "Home",
          href: "#",
        },
        {
          text: "Shop",
          href: "#",
        },
        {
          text: "About",
          href: "#",
        },
        {
          text: "Gallery",
          href: "#",
        },
        {
          text: "Locations",
          href: "#",
        },
        {
          text: "Journal",
          href: "#",
        },
        {
          text: "Contact",
          href: "#",
        },
        {
          text: "My Account",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#header_nav_bar {
  max-width: 1200px;
  margin: 0 auto;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .logo {
    width: 100px;
  }
}
ul {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
}
ul li:first-child {
  border-bottom: 2px solid #5b2ca2;
}
li a{
  text-transform: uppercase;
  font-size: 10px;
}
img {
  width: 100%;
}
</style>