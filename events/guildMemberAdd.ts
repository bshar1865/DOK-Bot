import {
  Client,
  Events,
  GuildMember
} from 'discord.js';
import idclass from '../utils/idclass';

export default {
  name: Events.GuildMemberAdd,
  once: false,
  async execute(member: GuildMember, client: Client) {
    try {
      // Get the BROTHERS role ID
      const brothersRoleId = idclass.RoleBROTHERS();
      
      // Check if the role exists
      const brothersRole = member.guild.roles.cache.get(brothersRoleId);
      if (!brothersRole) {
        console.error(`BROTHERS role not found with ID: ${brothersRoleId}`);
        return;
      }

      // Add the BROTHERS role to the new member
      await member.roles.add(brothersRoleId);

    } catch (error) {
      console.error('Error assigning BROTHERS role to new member:', error);
    }
  }
}; 