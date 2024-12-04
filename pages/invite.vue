<template>
  <div>
    <p
      class="stroked-text-2 text-center pt-23px font-black text-2xl uppercase font-movaviGrotesque"
    >
      invite friends!
    </p>
    <p class="stroked-text-3 text-center font-semibold text-sm">
      You and your friend will receive bonuses!
    </p>
    <div class="mt-3 grid grid-cols-2 gap-3 px-3.5">
      <div
        class="image-box justify-center"
        style="background-image: url('/images/invite-1.png')"
      >
        <ButtonBase :type="EButtonType.Yellow"
          ><p class="stroked-text-4 font-movaviGrotesque font-black text-xs">
            More Bonuses
          </p></ButtonBase
        >
      </div>
      <div
        class="image-box justify-between"
        style="background-image: url('/images/invite-2.png')"
      >
        <ButtonBase :type="EButtonType.Blue"
          ><p class="stroked-text-4 font-movaviGrotesque font-black text-xs">
            Invite
          </p></ButtonBase
        >
        <ButtonBase :type="EButtonType.Blue"
          ><img src="/images/icons/link.png" width="16" height="16" alt="link"
        /></ButtonBase>
      </div>
    </div>
    <p class="stroked-text-3 mt-4 text-center font-black text-white mb-2">
      List of your friends
    </p>
    <div class="flex justify-center">
      <ButtonBase :type="EButtonType.Yellow">
        <div class="flex items-center gap-6 w-fit">
          <p class="stroked-text-4 font-movaviGrotesque font-black text-xs">
            Claim
          </p>
          <p class="stroked-text-4 font-movaviGrotesque font-black text-10px">
            12.5k
          </p>
        </div>
      </ButtonBase>
    </div>
    <div class="mt-2 px-7px">
      <FriendsList :friends="friends" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IMember } from "~/interfaces";
import { EButtonType } from "~/interfaces/enums";

useHead({
  title: "Invite friends",
});

const friends: IMember[] = [
  { name: "Anastasia V", level: 1 },
  { name: "Anastasia V", level: 1 },
  { name: "Dmitro", level: 1 },
  { name: "Diana", level: 15 },
  { name: "Nikita", level: 99 },
  { name: "Nikita", level: 99 },
];
</script>
