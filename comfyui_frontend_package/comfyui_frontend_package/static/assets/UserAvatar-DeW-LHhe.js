var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, computed, openBlock, createBlock, unref } from "./vendor-vue-Dj1-cm8e.js";
import { script$64 as script } from "./vendor-primevue--_uihavt.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserAvatar",
  props: {
    photoUrl: {},
    ariaLabel: {}
  },
  setup(__props) {
    const imageError = ref(false);
    const handleImageError = /* @__PURE__ */ __name(() => {
      imageError.value = true;
    }, "handleImageError");
    const hasAvatar = computed(() => __props.photoUrl && !imageError.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(script), {
        image: _ctx.photoUrl ?? void 0,
        icon: hasAvatar.value ? void 0 : "pi pi-user",
        shape: "circle",
        "aria-label": _ctx.ariaLabel ?? _ctx.$t("auth.login.userAvatar"),
        onError: handleImageError
      }, null, 8, ["image", "icon", "aria-label"]);
    };
  }
});
export {
  _sfc_main
};
//# sourceMappingURL=UserAvatar-DeW-LHhe.js.map
