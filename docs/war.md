---
title: EventWar
sidebar_position: 7
---

EventWars are organized PvP battles that enable towns and nations to compete for territory and resources. This guide provides essential information for players participating in EventWars.

### War Types

- **Riot**: Internal conflict within a town where players choose sides between the city and the rioters.
- **Town vs Town**: Direct battle between two towns.
- **Civil War**: Nation-wide conflict where towns align with either the capital or the rebels.
- **Independence War**: A conquered town fights its nation for freedom, potentially leading other towns to join the rebellion.
- **Nation vs Town**: A nation attacks a town, aiming to conquer it. Allied towns may join the defense.
- **Nation vs Nation**: Two nations engage in warfare against each other.
- **Alliance vs Alliance**: Two nations, along with their allies, battle each other.
- **World War**: A global conflict where all nations with enemies are drawn into war.

### Starting a War

| Command | Description |
|---------|-------------|
| `/town redeem {wartype}` | Purchase Declaration of War (DoW) book |
| `/declare war {wartype}` | Use DoW book to declare war |

### War Mechanics

#### War Tokens
1. Non-neutral towns receive war tokens daily
2. Towns in active wars don't earn tokens

#### TownBlock HP
- **A**: Each town block has Hit Points (HP)
- **B**: Attackers reduce HP by occupying blocks
- **C**: Defenders can heal HP when outnumbering attackers

#### Prisoners of War
- 🔒 Players killed in enemy territory may be jailed
- 🏃‍♂️ Escape the jail plot to be released
- 💥 Destroying a jail (HP to 0) triggers a jailbreak

:::tip
- DoW books can be customized with `/declare setwarname {name}`
- Blocks must be attacked from town edges inward
- Surrender with `/surrender` (when permitted)
- Detailed docs: [Official EventWar Guide](https://townyadvanced.github.io/eventwar.html)
:::