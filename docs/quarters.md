---
title: Quarters
sidebar_position: 5
description: Quarters extend the functionality of towns and plots, allowing for the creation of customizable spaces such as apartments.
keywords: [earthcube, earthcubemc, earthcube quarters, earthcube plots, earthcube quarter]
---

Quarters extend the functionality of towns and plots, allowing for the creation of customizable spaces such as apartments. Unlike [standard plots](/docs/towns#plots) that are restricted to a grid-based system, Quarters enable dynamically sized cuboids with editable permissions.

### Creating a Quarter

To create a Quarter, you must be the mayor or a councillor of a town. Follow these steps:

1. Obtain a flint, which serves as the "wand" item in Quarters. If unavailable, use the command `/q wand` to receive a free wand once.
2. Select two positions using the flint to define a cuboid. An outline will appear showing your selection while holding the wand.
3. To add the selected cuboid to your current selection, use the command `/q selection add`. You can add multiple cuboids by repeating the selection process.
4. Once all desired cuboids are selected, create the Quarter with the command `/q create`.

### Quarter Prerequisites

The following requirements must be met to create a Quarter:

- The Quarter must be entirely within a single town.
- No part of the Quarter can extend into wilderness areas.
- The selected cuboids must not overlap with any existing Quarters.
- The Quarter must remain within the world's minimum and maximum height limits.

:::note
Existing Quarters will be deleted if any of the above requirements are violated, such as if the underlying town block is unclaimed or the town is deleted.
:::

### Permission Management

Quarters offer granular control over permissions, overriding the underlying plot permissions. Manage permissions using the following command:

- `/q set [actiontype] [permlevel] [true/false]`: Set specific permissions for actions and permission levels.

Additionally, you can grant full access to a Quarter (excluding command permissions) with:

- `/q trust add [player]`: Trust a player with full access to the Quarter.

### Quarter Types

Mayors and councillors can assign specific types to Quarters using the command `/q type [type]`. Each type adds functionality to the default Apartment type:

| Quarter Type | Description |
|--------------|-------------|
| `Apartment`  | The default Quarter type. Permissions are granted to the owner, trusted users, those with Quarter permissions, and those with permissions in the underlying town plot. |
| `Inn`        | Allows players to use beds inside the Quarter. |
| `Station`    | Allows players to use vehicles like boats and minecarts within the Quarter. |

To allow town outsiders to benefit from these properties, set the Quarter as an embassy using `/q toggle embassy`.

### Selling and Buying Quarters

To sell a Quarter, stand within its bounds and use the command:

- `/q sell [price]`: Puts the Quarter up for sale at the specified price.

A player can then purchase it by standing inside the Quarter and typing:

- `/q claim`: Claims the Quarter that is for sale.

To sell to a player who is not a resident of the Quarter's town, first turn the Quarter into an embassy with:

- `/q toggle embassy`: Toggles the Quarter's embassy status.

Note: If the Quarter's embassy status is removed, non-resident ownership will be revoked.

### Basic Quarter Commands

| Command | Description |
|---------|-------------|
| `/q claim` | Claim a Quarter that is for sale. |
| `/q create` | Turn a selected area into a Quarter. |
| `/q delete` | Delete the Quarter you are currently standing in. |
| `/q delete plot` | Delete all Quarters in the plot you are standing in. |
| `/q evict` | Evict the owner of the Quarter you are standing in. |
| `/q edit addselection` | Add a selection to your current Quarter. |
| `/q edit remove` | Remove a selection from your current Quarter. |
| `/q here` | View information about the Quarter you are standing in. |
| `/q pos` | Set positions without a wand. |
| `/q selection add` | Adds a selected cuboid to your current selection. |
| `/q selection clear` | Remove all your currently added cuboids. |
| `/q selection copy` | Copy your currently added cuboids relative to your position. |
| `/q selection paste` | Paste the previously copied selection at your current location. |
| `/q set <actiontype> <permlevel> <true/false>` | Set permission for specific actions inside the Quarter. |
| `/q toggle embassy` | Toggle whether a Quarter is treated as an embassy (enables non-resident ownership and interaction). |
| `/q trust add <player>` | Grant full access to a player inside the Quarter. |
| `/q trust remove <player>` | Remove trusted status from a player in your Quarter. |
| `/q type <type>` | Set the Quarter's type (e.g., Apartment, Inn, Station). |
| `/q wand` | Get a wand used to define Quarter regions (flint). |
| `/q sell <price>` | Put the Quarter you are standing in up for sale. |