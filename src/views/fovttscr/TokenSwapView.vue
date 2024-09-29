<template>
  <div class="row justify-content-center g-3">
    <div class="col-lg-5">
      <div class="card">
        <div class="card-header">
          Token List
          <div class="form-group ms-5">
            <select
              id="my-select"
              class="form-select"
              v-model="foundry_version">
              <option value="v_11">Foundry Version 11</option>
              <option value="v_12">Foundry Version 12</option>
            </select>
          </div>
          <div class="card-actions btn-actions">
            <button @click="addList()" class="btn-action">
              <i class="fas fa-plus fa-lg text-success"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <!-- {{ dc_list }} -->
          <form @submit.prevent="generateScript()">
            <button type="submit" ref="cssf" hidden>submit</button>
            <div class="card mb-3" v-for="(pl, idx) in pic_list" :key="idx">
              <div class="card-header">
                <h3 class="card-title">Token Info {{ idx + 1 }}</h3>
                <div
                  class="card-actions btn-actions"
                  v-show="pic_list.length > 1">
                  <button @click="pic_list.splice(idx, 1)" class="btn-action">
                    <i class="fas fa-times fa-lg text-danger"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label :for="'tolip_' + idx">Label</label>
                  <input
                    type="text"
                    class="form-control mb-1"
                    :id="'tolip_' + idx"
                    v-model="pl.i_label"
                    aria-describedby="helpId"
                    placeholder="Label"
                    required />
                  <label :for="'urlip_' + idx">Token Link</label>
                  <input
                    type="url"
                    class="form-control"
                    :id="'urlip_' + idx"
                    v-model="pl.i_url"
                    aria-describedby="helpId"
                    placeholder="Token Link"
                    required />
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
          Foundry Script
          <div class="card-actions">
            <button @click="toCopy()" class="btn btn-info me-2">Copy</button>
            <button @click="$refs.cssf.click()" class="btn btn-primary">
              Generate Script
            </button>
          </div>
        </div>
        <div class="card-body">
          <textarea
            class="form-control"
            rows="15"
            v-model="scriptcode"
            readonly>
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import t from "@/assets/token_swap.json";

export default {
  data() {
    return {
      t,
      pic_list: [
        {
          i_label: "",
          i_url: "",
        },
      ],
      scriptcode: "",
      foundry_version: "v_11",
    };
  },
  methods: {
    addList() {
      this.pic_list.push({
        i_label: "",
        i_url: "",
      });
    },
    toCopy() {
      navigator.clipboard.writeText(this.scriptcode);
    },
    generateScript() {
      let inarray = this.pic_list.reduce((p, now) => {
        return (
          p +
          t.in_array
            .replaceAll("i_label", now.i_label)
            .replaceAll("i_url", now.i_url)
        );
      }, "");

      this.scriptcode = t[this.foundry_version]
        .replaceAll("arr_images", inarray)
        .replaceAll("\n", "");
    },
  },
};
</script>

<style></style>
