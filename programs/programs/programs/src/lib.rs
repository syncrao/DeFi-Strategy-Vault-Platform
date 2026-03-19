use anchor_lang::prelude::*;

declare_id!("R6AqUa2CdnF9ihBMRjRj83PL1jL1bwp4ktfpran456j");

#[program]
pub mod programs {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
