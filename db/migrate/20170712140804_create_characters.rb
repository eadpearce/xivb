class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.text :about
      t.integer :lodestone_id
      t.references :user, foreign_key: true
      t.json :data

      t.timestamps
    end
  end
end
