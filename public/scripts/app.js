const boxChat = document.querySelector("#box-chat");
const boxNoti = document.querySelector("#box-noti");
const boxLang = document.querySelector("#box-language");
const boxAva = document.querySelector("#box-ava");
const chatIconBtn = document.querySelector(".chat-icon");
const notiIconBtn = document.querySelector(".noti-icon");
const langIconBtn = document.querySelector(".language-icon");
const avaIconBtn = document.querySelector(".ava-icon");
const btnExitChat = document.querySelector(".btn__exit-chat");
const btnExitNoti = document.querySelector(".btn__exit-noti");

chatIconBtn.addEventListener("click", () => {
  boxChat.classList.add("active");
});

notiIconBtn.addEventListener("click", () => {
  boxNoti.classList.add("active");
});

btnExitChat.addEventListener("click", () => {
  boxChat.classList.remove("active");
});

btnExitNoti.addEventListener("click", () => {
  boxNoti.classList.remove("active");
});

langIconBtn.addEventListener("click", () => {
  if (boxLang.classList.contains("active")) {
    boxLang.classList.remove("active");
  } else {
    boxLang.classList.add("active");
  }
});

avaIconBtn.addEventListener("click", () => {
  if (boxAva.classList.contains("active")) {
    boxAva.classList.remove("active");
  } else {
    boxAva.classList.add("active");
  }
});

const btnList = document.querySelectorAll(".btn__sidebar-item");

for (i = 0; i < btnList.length; ++i) {
  btnList[i].addEventListener("click", function (e) {
    var currentElem = $(this).parent().parent();
    var button = $(this);
    $(".card-header").each(function () {
      if (currentElem[0] === $(this)[0]) {
        if (button.attr("aria-expanded") == "false")
          currentElem.addClass("active__sidebar-item");
        else currentElem.removeClass("active__sidebar-item");
      } else $(this).removeClass("active__sidebar-item");
    });
  });
}

if (window.location.pathname === "/home.html") {
  const boxChatSupport = document.querySelector("#box__support-chat");
  const btnSupport = document.querySelector(".btn-support");
  const btnCloseSupportChat = document.querySelector(".icon__exit-chat");
  btnSupport.addEventListener("click", () => {
    boxChatSupport.classList.add("active");
    btnSupport.style.display = "none";
  });
  btnCloseSupportChat.addEventListener("click", () => {
    boxChatSupport.classList.remove("active");
    btnSupport.style.display = "block";
  });

  // show spin box
  const spinButton = document.querySelector(`img[alt="spin"]`);
  const spinBox = document.querySelector(`.box__spin-overlay`);
  const spinBoxList = document.querySelector("#box-spin");
  spinButton.addEventListener("click", (e) => {
    if (spinBox.classList.contains("active")) {
      spinBox.classList.remove("active");
    } else {
      spinBox.classList.add("active");
    }
  });
  spinBox.addEventListener("click", (e) => {});

  // show quest box
  const questBtn = document.querySelector(`img[alt="quest"]`);
  const questBox = document.querySelector(`.box__quest-overlay`);
  questBtn.addEventListener("click", () => {
    if (questBox.classList.contains("active")) {
      questBox.classList.remove("active");
    } else {
      questBox.classList.add("active");
    }
  });

  // show refer box
  const referSidebar = document.querySelector(`.refer-feature`);
  const referBox = document.querySelector(`.box__refer-overlay`);
  console.log(referSidebar);
  referSidebar.addEventListener("click", () => {
    if (referBox.classList.contains("active")) {
      referBox.classList.remove("active");
    } else {
      referBox.classList.add("active");
    }
  });

  const btnExitRefer = document.querySelector(`.icon__exit-refer`);
  btnExitRefer.addEventListener("click", () => {
    referBox.classList.remove("active");
  });
}
if (location.pathname === "/withdraw.html") {
  // confirm security
  const boxSecurity = document.querySelector("#box-security");
  document.querySelector("#confirm-withdraw").addEventListener("click", () => {
    if (!boxSecurity.classList.contains("active")) {
      document
        .querySelector(".container-wrapper")
        .classList.add("active-overlay");
      boxSecurity.classList.add("active");
    }
  });
  document
    .querySelector(".btn__exit-security")
    .addEventListener("click", () => {
      if (boxSecurity.classList.contains("active")) {
        boxSecurity.classList.remove("active");
      }
    });
}

const header = document.querySelector("header");
const headerMenu = document.querySelector(".header-menu");
const onHeaderScroll = () => {
  if (window.scrollY > header.offsetTop) {
    header.classList.add("fixed-active");
  } else {
    header.classList.remove("fixed-active");
  }
};
window.addEventListener("scroll", onHeaderScroll);

const menuSidebar = document.querySelector("#menu-sidebar");
const sidebarElem = document.querySelector(".-bar")side;
const toggleSidebar = () => {
  sidebarElem.classList.toggle("active-show");
};
menuSidebar.addEventListener("click", toggleSidebar);

let width = screen.width;
if (width <= 576) {
  sidebarElem.classList.toggle("active-show");
}
