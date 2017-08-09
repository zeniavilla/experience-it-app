class CreateUserExperiences < ActiveRecord::Migration[5.1]
  def change
    create_table :user_experiences do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :experience, foreign_key: true

      t.timestamps
    end
  end
end
