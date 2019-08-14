class CreateColumns < ActiveRecord::Migration[6.0]
  def change
    create_table :columns do |t|
      t.integer :position
      t.string :name
      t.references :swimlane, null: false, foreign_key: true

      t.timestamps
    end
  end
end
