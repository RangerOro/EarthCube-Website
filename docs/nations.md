---
title: Nations
sidebar_position: 6
---

Nations are alliances of towns that provide diplomatic, economic, and military benefits to their member towns.

### Create a Nation

To create a nation, you must have a town and 2048 gold in its bank. You can deposit gold in your town's bank with `/t deposit {amount}`.
Only the mayor of a town can create a nation, and its town will become the nation's capital. You can create nations with `/n new {name}`.

:::caution
When choosing your nation's name, make sure it isn't offensive or politically insensitive - keep it clean. Staff may have to change your nation's name with admin permissions to prevent this.
:::

Once you have created a nation, you may want to ally with other nations to avoid conflict and becoming able to teleport to eachother's towns (and nation spawn). You can ally other nations with `/n ally add {nation}`. After that, you may want to add towns to your realm. You can only invite and add towns that aren't already in a nation. You can do so with `/n add {town}`.

### Nation Commands

| **Commands**                  | **Description**                                                                     |
|-------------------------------|-------------------------------------------------------------------------------------|
| /n [name]                     | Get information of specified nation                                                 |
| /n new [name]                 | Create a new nation                                                                 |
| /n spawn                      | Teleport to nation capital                                                          |
| /n leave                      | Makes your town leave nation                                                        |
| /n withdraw [amount]          | Withdraw gold from nation bank                                                      |
| /n deposit [amount]           | Deposit gold from nation bank                                                       |
| /n add [town]                 | Invite town to nation                                                               |
| /n kick [town]                | Kick a town from nation                                                             |
| /n outlaw add/remove [player] | Outlaw player from nation, preventing them from joining/teleporting to nation town. |
| /n outlawlist [nation]        | View a nation's outlaws                                                             |
| /n ally add/remove [nation]   | Add/remove nation ally                                                              |
| /n enemy add/remove [nation]  | Add/remove nation enemy. Removes or prevents an alliance                            |
| /n toggle open                | Toggle public joining to your nation                                                |
| /n delete                     | Delete nation                                                                       |
| /n set king [player]          | King command to change the king of the nation                                       |
| /n set capital [town]         | Set nation capital                                                                  |
| /n set spawn                  | Set nation spawn at your location                                                   |
| /n set board [message]        | Set nation message of the day                                                       |
| /n set taxes [amount]         | Set nation taxes per 24-hour cycle                                                  |
| /n set title [title]          | Set titles for members of your nation                                               |