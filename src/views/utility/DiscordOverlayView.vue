<template>
  <div class="row justify-content-center g-3">
    <div class="col-lg-5">
      <div class="card">
        <div class="card-header">
          List
          <div class="card-actions btn-actions">
            <button @click="addList()" class="btn-action">
              <i class="fas fa-plus fa-lg text-success"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <!-- {{ dc_list }} -->
          <form @submit.prevent="generateCss()">
            <button type="submit" ref="cssf" hidden>submit</button>
            <div v-if="dc_list.length > 0">

              <div class="card mb-3" v-for="(dc, idx) in dc_list" :key="idx">
                <div class="card-header">
                  <h3 class="card-title">Discord Info {{ idx + 1 }}</h3>
                  <div class="card-actions btn-actions" v-show="dc_list.length > 1 || true">
                    <button @click="dc_list.splice(idx, 1)" class="btn-action">
                      <i class="fas fa-times fa-lg text-danger"></i>
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <label :for="'dcip_' + idx">Discord ID</label>
                    <input type="text" class="form-control mb-1" :id="'dcip_' + idx" v-model="dc.disuserid"
                      aria-describedby="helpId" placeholder="Discord ID" required />
                    <label :for="'plip_' + idx">Picture Link</label>
                    <input type="url" class="form-control" :id="'plip_' + idx" v-model="dc.picturelink"
                      aria-describedby="helpId" placeholder="Picture Link" required />
                    <label class="form-check form-check-inline mt-2">
                      <input class="form-check-input" type="checkbox" v-model="dc.haveSpeakPic" />
                      <span class="form-check-label">Have Speak State Pic ?</span>
                    </label>
                    <br v-if="dc.haveSpeakPic" />
                    <label v-if="dc.haveSpeakPic" :for="'plsip_' + idx">Picture Speak Link</label>
                    <input v-if="dc.haveSpeakPic" type="url" class="form-control" :id="'plsip_' + idx"
                      v-model="dc.picturespeaklink" aria-describedby="helpId" placeholder="Picture Speak Link"
                      required />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" v-else>

              <div class="card-body text-center">
                Show All User
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-7">
      <div class="card">
        <div class="card-header">
          CSS File
          <div class="card-actions">
            <button @click="toCopy()" class="btn btn-info me-2">Copy</button>
            <button @click="$refs.cssf.click()" class="btn btn-primary">
              Generate CSS
            </button>
          </div>
        </div>
        <div class="card-body">
          <textarea class="form-control" rows="15" v-model="csscode" readonly>
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import t from "@/assets/obs_discord.json";

  export default {
    data() {
      return {
        t,
        dc_list: [

        ],
        csscode: "",
      };
    },
    methods: {
      addList() {
        this.dc_list.push({
          disuserid: "",
          picturelink: "",
          haveSpeakPic: false,
          picturespeaklink: "",
        });
      },
      generateCss() {
        this.csscode =
          t.first +
          this.dc_list.reduce((p, n) => {
            return (
              p +
              t.forplayer
                .replaceAll("disuserid", n.disuserid)
                .replaceAll("picturelink", n.picturelink) +
              (n.haveSpeakPic
                ? t.forhavespeak
                  .replaceAll("disuserid", n.disuserid)
                  .replaceAll("picturespeaklink", n.picturespeaklink)
                : "")
            );
          }, "");
        if (this.dc_list.length >= 1) {
          this.csscode += t.haveplayer
        }
      },
      toCopy() {
        navigator.clipboard.writeText(this.csscode);
      },
    },
  };
</script>

<style></style>
