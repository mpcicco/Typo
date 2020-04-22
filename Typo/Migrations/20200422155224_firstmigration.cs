using Microsoft.EntityFrameworkCore.Migrations;

namespace Typo.Migrations
{
    public partial class firstmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Words",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Words", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Words",
                columns: new[] { "Id", "Text" },
                values: new object[,]
                {
                    { 1L, "ciao" },
                    { 2L, "come" },
                    { 3L, "stai" },
                    { 4L, "oggi" },
                    { 5L, "pomeriggio" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Words");
        }
    }
}
