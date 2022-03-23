<template>
  <div id="footer_nav_bar">
    <div class="container">
      <div class="avada_container">
        <div>
          <div class="logo">
            <img src="../../assets/img/avada-bakery-logo.png" alt="" />
          </div>
          <div class="list">
            <ul>
              <li v-for="(link, i) in links" :key="i">
                <a class="daisy_bush" :href="link.href">{{ link.text }}</a>
              </li>
              <li>
                <a class="daisy_bush" href="#"
                  ><i class="fas fa-shopping-cart"></i
                ></a>
                <div>0</div>
              </li>
            </ul>
          </div>
          <div class="copyright">
            <p class="manatee">
              &#169; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All
              Rights Reserved | Powered by WordPress
            </p>
          </div>
        </div>
      </div>
      <div class="subscribe_email">
        <div>
          <h1 class="daisy_bush">Subsribe to our Newsletter</h1>
          <div class="email">
            <input
              id="emailAddress"
              type="email"
              placeholder="Enter email address*"
            />
            <button>Subsribe</button>
          </div>
          <div class="icons">
            <ul>
              <li v-for="(el, i) in icons" :key="i">
                <a class="daisy_bush" :href="el.href"><i :class= "el.icon" i/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNavBar",
  data() {
    return {
      links: [
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
          text: "Orders",
          href: "#",
        },
      ],
      icons: [
        {
          icon: "fab fa-instagram",
          href: "#",
        },
        {
          icon: "fab fa-twitter",
          href: "#",
        },
        {
          icon: "fab fa-facebook-f",
          href: "#",
        },
        {
          icon: "fab fa-pinterest-p",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#footer_nav_bar {
  width: 1200px;
  margin: 0 auto;
  height: 250px;
  padding-top: 40px;
  .container {
    display: flex;
    height: 100%;
    .avada_container {
      width: 50%;
      height: 100%;
      .logo {
        width: 80px;
        img {
          width: 100%;
        }
      }
    }
  }
}
.list {
  padding-top: 20px;
}
.list ul {
  display: flex;
  gap: 20px;
  font-size: 10px;
  a {
    color: #5b2ca2;
    text-transform: uppercase;
    font-weight: 600;
  }
  li:last-child {
    display: flex;
    gap: 3px;
    justify-content: center;
    align-items: center;
  }
  li div {
    width: 10px;
    height: 10px;
    background-color: #e5dcf6;
    text-align: center;
    border-radius: 50%;
    line-height: 10px;
    font-size: 6px;
  }
}
.copyright {
  padding-top: 60px;
  p {
    font-size: 8px;
  }
}
.subscribe_email {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  h1 {
    font-size: 18px;
    font-weight: 800;
    text-align: right;
    padding-bottom: 20px;
  }
  .email {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    input {
      width: 300px;
      padding: 10px 20px;
      border: none;
      border: 1px solid #efeff0;
      border-radius: 5px;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      color: white;
      background-color: #5b2ca2;
    }
  }
}
.icons {
  ul {
    padding-top: 60px;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
  }
}
</style>