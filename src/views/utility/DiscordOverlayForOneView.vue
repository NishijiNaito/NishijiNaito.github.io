<template>
  <div class="row justify-content-center g-3">
    <div class="col-lg-5">
      <div class="card">
        <div class="card-header">
          List

        </div>
        <div class="card-body">
          <!-- {{ dc_list }} -->
          <form @submit.prevent="generateCss()">
            <button type="submit" ref="cssf" hidden>submit</button>
            <div class="card mb-3">
              <div class="card-header">
                <h3 class="card-title">Discord Info</h3>

              </div>
              <div class="card-body">
                <div class="form-group">
                  <label :for="'dcip_' + 1">Discord ID</label>
                  <input type="text" class="form-control mb-1" :id="'dcip_' + 1" v-model="dc_detail.disuserid"
                    aria-describedby="helpId" placeholder="Discord ID" required />
                  <label :for="'plip_' + 1">Picture Link</label>
                  <input type="url" class="form-control" :id="'plip_' + 1" v-model="dc_detail.picturelink"
                    aria-describedby="helpId" placeholder="Picture Link" required />
                  <label class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="checkbox" v-model="dc_detail.haveSpeakPic" />
                    <span class="form-check-label">Have Speak State Pic ?</span>
                  </label>
                  <br v-if="dc_detail.haveSpeakPic" />
                  <label v-if="dc_detail.haveSpeakPic" :for="'plsip_' + idx">Picture Speak Link</label>
                  <input v-if="dc_detail.haveSpeakPic" type="url" class="form-control" :id="'plsip_' + 1"
                    v-model="dc_detail.picturespeaklink" aria-describedby="helpId" placeholder="Picture Speak Link"
                    required />
                  <br />
                  <div class="row">
                    <div class="col-lg-6">
                      <label :for="'plwidth'">width</label>
                      <input type="number" class="form-control" :id="'plwidth'" v-model="dc_detail.width"
                        aria-describedby="helpId" placeholder="width" required />
                    </div>
                    <div class="col-lg-6">
                      <label :for="'plheight'">height</label>
                      <input type="number" class="form-control" :id="'plheight'" v-model="dc_detail.height"
                        aria-describedby="helpId" placeholder="height" required />
                    </div>
                  </div>

                </div>
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
  import t from "@/assets/obs_discord_one.json";

  export default {
    data() {
      return {
        t,
        dc_detail: {
          disuserid: "",
          picturelink: "",
          haveSpeakPic: false,
          picturespeaklink: "",
          width: 50,
          height: 50
        },
        csscode: "",
      };
    },
    methods: {

      generateCss() {
        this.csscode =
          t.first
            .replaceAll("#disHeight#", this.dc_detail.height)
            .replaceAll("#disWidth#", this.dc_detail.width) +
          t.forplayer
            .replaceAll("disuserid", this.dc_detail.disuserid)
            .replaceAll("picturelink", this.dc_detail.picturelink) +
          (this.dc_detail.haveSpeakPic
            ? t.forhavespeak
              .replaceAll("disuserid", this.dc_detail.disuserid)
              .replaceAll("picturespeaklink", this.dc_detail.picturespeaklink)
            : "")

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

      },
      toCopy() {
        navigator.clipboard.writeText(this.csscode);
      },
    },
  };
</script>

<style></style>
