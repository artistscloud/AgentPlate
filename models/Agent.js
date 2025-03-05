const { supabaseService } = require('../config/supabase');

class Agent {
  static async getAll(userId) {
    const { data, error } = await supabaseService
      .from('agents')
      .select('*')
      .eq('creator_id', userId);
    if (error) throw error;
    return data;
  }

  static async create(userId, agentData) {
    const { data, error } = await supabaseService
      .from('agents')
      .insert([{ ...agentData, creator_id: userId }])
      .select();
    if (error) throw error;
    return data;
  }
}

module.exports = Agent;
