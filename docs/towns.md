---
title: Towns
sidebar_position: 4
---

Towns are player-created settlements that allow you to claim land, invite residents, and establish a community. Here's how to get started:

### The Essentials

1. Find a town to join. You can join an open town with `/t join {town name}`. If the town isn't open, you have to receive an invitation. You can accept town invites with `/accept`
2. You can also create a town, go in the location you want your town to be, and execute the command `/t create {town name}` or `/t new {town name}`. This costs 128 gold which will be withdrawed from your personal bank account.
3. Basic town commands:
- `/t spawn` makes you teleport to your town's homeblock
- `/t invite {player}`invites players to your town
- `t leave` makes you leave your town, if you're not the owner
4. To claim more land to your town, execute `/t claim` in chat. Your town will be able to claim chunks only if they're in wildrness. There is no overclaiming. Also, for every chunk you claim you will pay 16 gold. Make sure to store your gold in the town before doing so with `/t deposit {amount}` and not in your personal bank account!
5. Your town can join a [nation](/docs/nations) in the server through `/t join {nation name}` if the nation is open. If it is not, you will have to receive an invitation. To accept the invite, use `/t invite accept {nation}`

:::caution
When choosing your town's name, make sure it isn't offensive or politically insensitive - keep it clean. Staff may have to change your town's name with admin permissions to prevent this.
:::

At first, towns and nations may seem difficult to understand, but don't worry as you'll learn as you go.

### Plots

Plots are the chunks (16x16 blocks) that are inside a town. The town mayor or plot owner can manage them freely. Plots can be sold to residents and have different properties and permissions. You can view chunk borders with `F3+G`.

:::tip
It would make sense giving at least one plot for free to your residents, because they're more likely to leave if there's no space to build.
Make it easier for your residents to buy more plots. And if you have no space left in your town, consider expanding.
:::

When the chunk is claimed, the town mayor can manage the plot, or give it to a resident. Residents can buy their own plot (if for sale) with `/plot claim`, though, they **can't** actually claim chunks to their town.

Also, if you ever find the plot too big, or want your residents to buy more plots in one go, you could create a [Quarter](/docs/quarters).

### Plot Management

Once you have a plot, the first thing you want to do is set its purpose. You can do so with the command `/plot set {type}`. These are the most important plot types:
| Plot type | Description                                                                                                                                                                                                                                       |
|:---------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default   | The default plot type. Useful for personal builds, such as homes or other forms of town bases.                                                                                                                                                    |
| Shop      | Required in order to create shops.                                                                                                                                                                                                                |
| Arena     | Enables PvP inside the plot. Arena plots keep player inventory and experience on death.                                                                                                                                                           |
| Embassy   | This allows any player to buy the plot, regardless of what town they may belong to. Owning an embassy and changing plot type will still make you the owner. This is useful when creating shops in different towns, expanding your markets abroad. |


### Town Commands

| **Command**                         | **Description**                                                          |
|-------------------------------------|--------------------------------------------------------------------------|
| /t [town]                           | View information on specific town                                        |
| /t invite [player]                  | Invite player to town                                                    |
| /t here                             | Shows information on town at current location                            |
| /t list                             | List of all towns                                                        |
| /t leave                            | Leave town                                                               |
| /t new [name]                       | Create a new town                                                        |
| /t add [player]                     | Add resident to town                                                     |
| /t kick [player]                    | Kick resident from town                                                  |
| /t spawn                            | Teleport to town spawn                                                   |
| /t claim                            | Claim chunk                                                              |
| /t withdraw [amount]                | Withdraw gold from town bank                                             |
| /t deposit [amount]                 | Deposit gold to town bank                                                |
| /t toggle [explosion/fire/mobs/pvp] | Toggle specific values for town                                          |
| /t forsale [amount]                 | Sell entire town for specified amount of gold                            |
| /t buytown [town]                   | Buy a town that has been put up for sale. Town price is displayed on /t. |

:::caution
Since there are no town taxes, towns which are inactive for 44 days (1 month and 2 weeks), if reported by opening a [support ticket](https://support.earthcubemc.net), will get deleted.
:::