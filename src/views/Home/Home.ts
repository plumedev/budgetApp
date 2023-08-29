import { Vue, Options } from 'vue-class-component';
@Options({
  name: 'Home',
  template: require('./Home.html'),
})
export default class Home extends Vue {
  protected pushNewPage(): void {
    void this.$router.push({
      name: 'NewPage',
      params: { pageId: 'custom-param-test' },
    });
  }
}
