---
title: Wars
sidebar_position: 7
---

We feature **Event War**, a war plug-in that makes you able to fight officially with your teammates against someone else's town, nation or even the town you're in. This war system features many different war types, all of them unlockable with the **War Tokens**. You will receive one of these every day if your town is at least 5 days old.

In fact, when you create a town, you have **5 days of immunity** from wars, but you won't receive any war token. You also won't receive tokens when already in war.

With war tokens, you will be able to buy a **Declaration of War** book, used to declare war. Those can only be used by their creators and cannot be sold.

You can run `/eventwar guide` which will tell you how our server has configured war better.

There are few types of wars availabe as now:
| **War Name**     | **Token Cost** | **Description**                                          | **Min. Online** | **Max. Duration** | **War Cooldown** |
|------------------|----------------|----------------------------------------------------------|-----------------|-------------------|------------------|
| Riot War         | 4 Tokens       | A town fights against itself                             | 4 players       | 12 hours          | 1 day            |
| Town vs Town     | 7 Tokens       | A town fights against another town                       | 4 players       | 3 days            | 5 days           |
| Independence War | 10 Tokens      | Conquered town fights against its own nation for freedom | 8 players       | 5 days            | 5 days           |
| Civil War        | 10 Tokens      | A nation fights against itself                           | 8 players       | 5 days            | 5 days           |
| Nation vs Town   | 12 Tokens      | A nation fights against a town                           | 6 players       | 5 days            | 5 days           |
| Nation vs Nation | 14 Tokens      | A nation fights against another nation                   | 10 players      | 7 days            | 7 days           |

There is also Alliance vs Alliance and World War war types, those will be probably added in the future, or for a special occasion.

For the Riot and Civil war types, players or towns respectively will be able to select their team.

### Declaration of War Books

Declaration of War books are how players start wars. These books are purchased for Tokens using the `/town redeem` command.

Declaration of War books are used to rename the war which will be created by them. While holding their DOW book, a player can run the `/declare setwarname {namehere}` command. Using an empty name will cause the war name to be removed, making the war choose an automatically-generated name.

Declaration of War books are used by holding the book and using the `/declare war [wartype] [arg]` command, this is documented in the books themselves.

### TownBlock HP System

When a war type has the TownBlockHP system enabled all of the townblocks in each warring town are given an HP amount. Normal townblocks have 60 and homeblocks have 120 HP.

HP is lowered when attackers are stood in the townblock, and the attackers outnumber any allies of the town being attacked.

Optionally, townblock HPs can be healed when the allies outnumber the attackers.

Townblocks must be attacked from the edge of town, inwards towards the town's homeblock.

When townblocks are attacked, fireworks appear in the air above.

To help players discern what can be attacked Event War will make use of a BossBar. In the bossbar you will see 4 stats:
- Attackable/Non-Attackable: Starting from the edge of town and working progressively inwards, plots that are Attackable can have their HP lowered
- TownBlock/HomeBlock: You will see if it is a normal townblock, or the town's vital homeblock
- HP remaining: The amount of HP remaining
- HP change: The amount that the HP has gone up or down by

The boss bar is automatically shown when a player moves into a town with an active war, in which the TownBlockHP system is in use.

Additionally, players will see Holograms on each TownBlock, showing:
- HP remaining: The amount of HP remaining
- A coloured wool block with three meanings:
   - Green wool: The townblock is attackable
   - Yellow wool: The townblock is not attackable yet
   - Red wool: The townblock has fallen and has no HP left

TownBlocks will switch towns when they reach 0 HP.

If a jail plot has its HP dropped to zero, all of the prisoners of war will be unjailed in a prison break, and the jail will no longer be usable for the duration of the war.

### Lore

Event War is heavy in lore. Books are generated and given to players when wars start, when they end, and on every hour. They act as a permanent record.

Start-of-War books detail who is involved in the war, the rules by which they are fought and the consequences of victory and failure.

Hourly update books show players who is still in the fight and where the scores stand.

End-of-War books finalize the outcomes of the war, informing players who has survived, providing for a historical document for the ages.