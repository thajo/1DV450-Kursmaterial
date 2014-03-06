class User < ActiveRecord::Base
  def self.create_with_omniauth(provider, uid)
    create! do |user|
      user.provider = provider
      user.uid = uid
    end
  end
  
 
end
