class ChangeExperiencesTable < ActiveRecord::Migration[5.1]
  def change
    add_column :experiences, :liked, :boolean
  end
end
