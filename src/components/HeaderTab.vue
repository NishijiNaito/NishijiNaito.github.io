<template>
  <header class="navbar navbar-expand-md d-print-none">
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
        aria-controls="navbar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1
        class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"
      >
        <router-link to="/">
          <!-- <img
            src="./static/logo-small.svg"
            width="32"
            height="32"
            alt="Tabler"
            class="navbar-brand-image me-3"
          /> -->
          Naito san no Utility
        </router-link>
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <!-- <div class="nav-item d-none d-md-flex me-3">
          <div class="btn-list">
            <a
              href="https://github.com/tabler/tabler"
              class="btn"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                ></path>
              </svg>
              Source code
            </a>
            <a
              href="https://github.com/sponsors/codecalm"
              class="btn"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon text-pink"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                ></path>
              </svg>
              Sponsor
            </a>
          </div>
        </div> -->
        <div class="d-none d-md-flex">
          <div class="nav-item dropdown d-none d-md-flex me-3">
            <a
              href="#"
              class="nav-link px-0"
              data-bs-toggle="dropdown"
              tabindex="-1"
              aria-label="Show notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                ></path>
                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
              </svg>
              <span class="badge bg-red"></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card"
            >
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">อัปเดตล่าสุด</h3>
                </div>
                <div class="list-group list-group-flush list-group-hoverable">
                  <div class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span
                          class="status-dot status-dot-animated bg-green d-block"
                        ></span>
                      </div>
                      <div class="col text-truncate">
                        <div class="d-block text-body mt-n1">
                          D&D D20 Scoring Page
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--                  
                  <div class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="status-dot d-block"></span>
                      </div>
                      <div class="col text-truncate">
                        <a href="#" class="text-body d-block">Example 2</a>
                        <div class="d-block text-secondary text-truncate mt-n1">
                          justify-content:between ⇒
                          justify-content:space-between (#29734)
                        </div>
                      </div>
                      <div class="col-auto">
                        <a class="list-group-item-actions show">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon text-yellow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path
                              d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span class="status-dot d-block"></span>
                      </div>
                      <div class="col text-truncate">
                        <a href="#" class="text-body d-block">Example 3</a>
                        <div class="d-block text-secondary text-truncate mt-n1">
                          Update change-version.js (#29736)
                        </div>
                      </div>
                      <div class="col-auto">
                        <a href="#" class="list-group-item-actions">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon text-muted"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path
                              d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <span
                          class="status-dot status-dot-animated bg-green d-block"
                        ></span>
                      </div>
                      <div class="col text-truncate">
                        <a href="#" class="text-body d-block">Example 4</a>
                        <div class="d-block text-secondary text-truncate mt-n1">
                          Regenerate package-lock.json (#29730)
                        </div>
                      </div>
                      <div class="col-auto">
                        <a href="#" class="list-group-item-actions">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon text-muted"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path
                              d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div> 
                --></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="nav-item dropdown">
          <a
            href="#"
            class="nav-link d-flex lh-1 text-reset p-0"
            data-bs-toggle="dropdown"
            aria-label="Open user menu"
          >
            <span
              class="avatar avatar-sm"
              style="background-image: url(./static/avatars/002f.jpg)"
            ></span>
            <div class="d-none d-xl-block ps-2">
              <div>Kellie Skingley</div>
              <div class="mt-1 small text-secondary">Teacher</div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a @click="$router.push('/manageuser')" class="dropdown-item"
              >Status</a
            >
            <a href="./profile.html" class="dropdown-item">Profile</a>
            <a href="#" class="dropdown-item">Feedback</a>
            <div class="dropdown-divider"></div>
            <a href="./settings.html" class="dropdown-item">Settings</a>
            <a href="./sign-in.html" class="dropdown-item">Logout</a>
          </div>
        </div> -->
      </div>
    </div>
  </header>
  <header class="navbar-expand-md mb-5">
    <div class="collapse navbar-collapse" id="navbar-menu">
      <div class="navbar">
        <div class="container-xl">
          <div class="row flex-fill align-items-center">
            <div class="col">
              <ul class="navbar-nav">
                <li class="nav-item" :class="{ active: $route.name == 'home' }">
                  <router-link class="nav-link" to="/">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                      <i class="far fa-home"></i>
                    </span>
                    <span class="nav-link-title"> Home </span>
                  </router-link>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#navbar-third"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                      <i class="far fa-user-circle"></i>
                    </span>
                    <span class="nav-link-title"> Foundry VTT Script </span>
                  </a>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      @click="$router.push('/foundryvtt/token-swap')"
                    >
                      Token Swap Creator
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#navbar-third"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                  >
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                      <i class="far fa-user-circle"></i>
                    </span>
                    <span class="nav-link-title"> D&D </span>
                  </a>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      @click="$router.push('/dnd/d20scoring')"
                    >
                      D20 Scoring
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-3 d-none d-xxl-block">
              <div
                class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last"
              >
                <form action="./" method="get" autocomplete="off" novalidate="">
                  <div class="input-icon">
                    <span class="input-icon-addon">
                      <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
                        ></path>
                        <path d="M21 21l-6 -6"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      value=""
                      class="form-control"
                      placeholder="Search ทำแมวอะไร ไม่ให้ค้นโว้ยยยย"
                      aria-label="Search in website"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
