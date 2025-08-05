import { config } from "dotenv";
config();

class IDClass {
  roleMods() {
    return [
      this.RoleOwner(),
      this.RoleModerators(),
      this.DOKBot(),
      this.RoleBotOwner(),
      this.RoleModerators2(),
      this.RoleModerators3()
    ];
  }
  RoleOwner() {
    return "1402382618741182577";
  }

  RoleBotOwner() {
    return "1402382897725571133";
  }
  RoleModerators() {
    return "1402390170489192521";
  }

  RoleModerators2() {
    return "1402390170489192521";
  }

  RoleModerators3() {
    return "1402390170489192521";
  }

  RoleBROTHERS() {
    return "1402383198281011270";
  }
  DOKBot() { return "1402392348561768561"; }

  logChannel() { return "1395076496904683614"; }
  restrictedCategory() { return "1402393836025544895"; }
  channelErrorLogs() { return "1402394000924868808"; }
}

const idclass = new IDClass();
export default idclass;
