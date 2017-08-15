class CreateExperiences < ActiveRecord::Migration[5.1]
  def change
    create_table :experiences do |t|
      t.string :name
      t.string :category
      t.string :location
      t.string :time
      t.integer :likes
      t.string :recommended_times
      t.string :img_url
      t.boolean :liked

      t.timestamps
    end
  end
end
