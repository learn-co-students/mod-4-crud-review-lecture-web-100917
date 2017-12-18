class CreatePoems < ActiveRecord::Migration[5.1]
  def change
    create_table :poems do |t|
      t.text :content
      t.string :title
      t.integer :rating_count
      t.integer :total_rating

      t.timestamps
    end
  end
end
