import { Message, Client, EmbedBuilder, GuildMember } from 'discord.js';
import idclass from '../utils/idclass';

export default {
  name: 'brother',
  description: 'Assigns the BROTHERS role to a user.',
  requiredRoles: idclass.roleMods(),

  async execute(message: Message, args: string[], client: Client) {
    const requiredRoles = this.requiredRoles;

    const hasRequiredRole = message.member?.roles.cache.some(role =>
      requiredRoles.includes(role.id)
    );

    if (!hasRequiredRole) {
      return message.reply({
        content: 'You do not have permission to use this command.',
        allowedMentions: { parse: [] }
      });
    }

    const userId = args[0]?.replace(/[<@!>]/g, '');
    if (!userId) {
      return message.reply({
        content: 'Please provide a user ID or mention to assign the BROTHERS role.',
        allowedMentions: { parse: [] }
      });
    }

    try {
      // Get the BROTHERS role ID
      const brothersRoleId = idclass.RoleBROTHERS();
      
      // Check if the role exists
      const brothersRole = message.guild?.roles.cache.get(brothersRoleId);
      if (!brothersRole) {
        return message.reply({
          content: 'BROTHERS role not found. Please check the role configuration.',
          allowedMentions: { parse: [] }
        });
      }

      // Try to fetch the member
      const guildMember = await message.guild?.members.fetch(userId).catch(() => null);
      if (!guildMember) {
        return message.reply({
          content: 'User not found in this server. Please provide a valid user ID or mention.',
          allowedMentions: { parse: [] }
        });
      }

      // Check if user already has the BROTHERS role
      if (guildMember.roles.cache.has(brothersRoleId)) {
        const embed = new EmbedBuilder()
          .setColor('#FFA500')
          .setDescription(`<@${userId}> already has the BROTHERS role! 🤝`);
        return message.reply({ embeds: [embed] });
      }

      // Add the BROTHERS role
      await guildMember.roles.add(brothersRoleId);

      // Success message
      await message.reply({
        content: `the BROTHER has joined us!`,
        allowedMentions: { parse: [] }
      });

    } catch (error) {
      console.error('Error assigning BROTHERS role:', error);
      
      const errorEmbed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('❌ Error')
        .setDescription('Failed to assign the BROTHERS role. Please check the bot permissions and try again.')
        .setTimestamp();

      await message.reply({ embeds: [errorEmbed] });
    }
  }
}; 