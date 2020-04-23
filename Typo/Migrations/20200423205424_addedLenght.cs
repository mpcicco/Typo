using Microsoft.EntityFrameworkCore.Migrations;

namespace Typo.Migrations
{
    public partial class addedLenght : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NLetters",
                table: "Words",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Words",
                keyColumn: "Id",
                keyValue: 1L,
                column: "NLetters",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Words",
                keyColumn: "Id",
                keyValue: 2L,
                column: "NLetters",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Words",
                keyColumn: "Id",
                keyValue: 3L,
                column: "NLetters",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Words",
                keyColumn: "Id",
                keyValue: 4L,
                column: "NLetters",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Words",
                keyColumn: "Id",
                keyValue: 5L,
                column: "NLetters",
                value: 10);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NLetters",
                table: "Words");
        }
    }
}
